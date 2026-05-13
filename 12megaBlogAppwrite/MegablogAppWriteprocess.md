**first create fresh project with create vite and install tailwind**



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
* 





