**first create fresh project with create vite and install tailwind**



###### **ENV AND APPWRITE :-**



**then install all the dependencies that we need for the project**



\- npm install @reduxjs/toolkit

\- npm install react-redux

\- npm install react-router-dom

\- npm install appwrite

\- npm i @tinymce/tinymce-react

\- npm i html-react-parser

\- npm install react-hook-form



**now most important step will come which is environment variables.**



* we need ENV bcoz, we may use any services or database where our application will communicate
* create .env file in root folder
* now write - REACT\_APP\_APPWRITE\_URL:"test environment"
* now take note we never ship .env file in production or GitHub
* now go to file and right click and add it to gitignore
* but we also need this file for the variables and their values to be changed. so make a '.env.sample' file. and we can ship this file
* now the point how can i take access of the above env variable ?.. go to app.jsx and write - console.log(process.env.REACT\_APP\_APPWRITE\_URL) and technically it should be seen in console log browser. one imp note -  env variables usually loads only one time but if we make changes on it like updating any value we need to close the project and rerun again in max cases.
* now if we see on browser , the error comes process is not defined. so there are some bugs we need to solve in .env and app.jsx file. so we need to read the documentation first - https://create-react-app.dev/docs/adding-custom-environment-variables - if creating app with create-react-app or read- https://vite.dev/guide/env-and-mode - if there is vite.
* now our app is made through vite so we need to change the prefix of env variable like this - VITE\_APPWRITE\_URL="test environment". also in app.jsx we need to import it like this -   console.log(import.meta.env.VITE\_APPWRITE\_URL); then in browser we can see the value.
* now we need another variables to for our app - VITE\_APPWRITE\_PROJECT\_ID="" VITE\_APPWRITE\_DATABASE\_ID="" VITE\_APPWRITE\_BUCKET\_ID="" VITE\_APPWRITE\_COLLECTION\_ID="".. and at the end put the same variables in .env.sample file too.



**now we will create new project in appwrite :**



* go to appwrite.io and create account and do create project. and write project name 'blogpost' . dont create id now . use default id which it will give by itself.
* now copy api endpoint and project id from the dashboard of appwrite and paste it in .env
* now go to Auth -> setting -> and we want email/password to be enables automatically
* now go to database -> create database -> name - 'blog'. and now copy paste database id and paste it in env file. now create collections/tables for the database that we have created and copy the table id and paste it in env file. and got to settings and at permission add role -> All users. now i want all my registered users to create, read, update, delete the blog post.
* now create columns -> title, content, featuredImg, status, userId-text,required
* now we will create index so on basis of it we can do filtering. go to index -> create Index -> write key name status -> type-key -> select column - status and put in ascending order as per your choice.
* so for BUCKET\_ID.. go to storage -> create bucket -> name-'images' and copy and paste bucket id in .env file. now there is also same issue in this in bucket images go to setting and give  permission -> add role -> all users ->CRUD.
* so we have written this line to  access env variables -   console.log(import.meta.env.VITE\_APPWRITE\_URL); but sometimes the this may not process or env may not load and our app may got crashed. so there is a better way to access it. create config folder in src and in that create config.js file and create obj and in that export key value pairs in this of env variables.



###### **BUILD AUTHENTICATION SERVICE WITH APPWRITE :-**



**how to do authentication:**



* first go to auth docs in appwrite and understand how to do authentication.
* since we are creating service for appwrite, make a appwrite folder and all the work related to it will be in this folder and in that create authService.js file to write service. you can copy paste the basic code from documentation and it can work still, but sometimes it creates problem in register component where we need to expose it.
* the better approach is we create class for this and export it. till here we have made simple class and export it. but those who will use this class they need to create obj from this class to access methods , so we will directly make an obj for authservice and so that i can import directly and use the methods from it.
* now inside this object create client and account based on class format, bcoz when you will see documentation how to create client and account is written in different format but we have used class so we are writing different format based on constructor, but ti does the same work.
* now for creating account is easy as you can see in docs like give userid and email and other fields that you want to give but we dont want dependency. bcoz may be at sometime you need to make changes in app write , so you will not go everywhere and change it. so to solve this i will create pone async method(i have used bcoz i dont wanna go ahead until account creation is complete) like a wrapper in which i will call the appwrite services.
* so create async createAccount() method and destructure it with values that you want to take it as a parameter. (email, password, name). and this account creation method may fail, so use try catch block. now throw error in catch block and in try block write the account creation code.
* then create login method. and after login method is created you can call it in createAccount method where you have got already access of email and password.
* now we will create another services based on scenario like, if we directly land on homepage and how do i know if am logged in or not ? so for this we will create one method - getCurrentUser(). now in this method we dont need to pass any argument or anything we can simple ask the 'account' whether this user exist or not. so use account.get() method.
* now to create logout service , we use delete session method (read in docs)
* so our Authentication service is created for our appwrite.





