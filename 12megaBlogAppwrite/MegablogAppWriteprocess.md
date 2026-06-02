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
* now inside this object create client and account based on class format, bcoz when you will see documentation how to create client and account is written in different format but we have used class so we are writing different format based on constructor, but it does the same work.
* now for creating account is easy as you can see in docs like give userid and email and other fields that you want to give but we dont want dependency. bcoz may be at sometime you need to make changes in app write , so you will not go everywhere and change it. so to solve this i will create one async method(i have used bcoz i dont wanna go ahead until account creation is complete) like a wrapper in which i will call the appwrite services.
* so create async createAccount() method and destructure it with values that you want to take it as a parameter. (email, password, name). and this account creation method may fail, so use try catch block. now throw error in catch block and in try block write the account creation code.
* then create login method. and after login method is created you can call it in createAccount method where you have got already access of email and password.
* now we will create another services based on scenario like, if we directly land on homepage and how do i know if am logged in or not ? so for this we will create one method - getCurrentUser(). now in this method we dont need to pass any argument or anything we can simple ask the 'account' whether this user exist or not. so use account.get() method.
* now to create logout service , we use delete session method (read in docs)
* so our Authentication service is created for our appwrite.



###### **APPWRITE DATABASE, FILE UPLOAD AND CUSTOM QEURIES :-**



* now in this we will create another services, first of all we are making blog and for this we need to upload and the images are stored in collections.
* so create config.js file and in this our major configurations will be there. the work is almost same as what we have done in auth.js file.
* now make service class and make object for direct access of the method.
* now write the variables. now the point comes when account should be created in variables ? it is done through constructor call. so create client same as previous and also fill the variables values for databases and bucket.
* now the first thing comes, how can i create a post ?. so we will make one method createPost(). so to create post what values do we need ? just destructure that as parameter in method.
* now one thought will how we will get the featured img so for this we create one method storage from there we can call the img and we will return the img from this(createPost method).
* now read the databases docs, how to create document, here we will understand how to create post, so the use the createDocument method of appwrite. so first we will pass databaseId, then collectionId, then for documentId you can pass ID.unique bit here we will pass slug value that we have defined which will be giving me documentId and now pass the object > in this what further information you want to pass , pass the values. so here createPost is complete.
* now to update post create method which is similar to it (read docs). now there come one issue which document do i need to update for that i need to pass first documentId(slug) and then object. bcoz if we take DocumentId separately will get much better bcoz if we take values in all the object than we need to find the value one by one bcoz we need to update the exact document. there is no need of taking userID here (your choice) bcoz those who want to update only they can update so it will come from there. so update post part is completed.
* now for delete read deletedocument docs. and write similar code.
* now if i want one post so i need to get documentId of that post. so i will use getdocument method (read from docs)
* now if i want all documents or post i will use listdocuments method(read from docs). but i dont want like this, i dont want all documents bcoz those document/post whose status is not active will also appear, i want only active ones. so here we will understand the concept of queries.(read form docs) here we will use indexing that we have created in tables.. so create one method getposts and in that pass one variable queries and in that write the query format of what you want like i want like post whose status is active and try catch block code remains similar to docs.
* now we will create fileUpload service. so create method upload file and pass file as parameter. most of the people do mistake here, when doing file upload they just give name, but we dont need to give name, we need to give blob - actual file. to write code format (read docs - storage create file) - give bucketed , then dont file name, give unique iD there - ID.unique, then give file.
* now we will make another file service which is filepreview for this there is getFilepreview method (read docs) we need bucketId and fileId.
* so our appwrite and configuration are all done and next we will work on redux toolkit bcoz there store should know if user is logged in or not, we will write some logic there.



###### **HOW TO CONFIGURE REDUX TOOLKIT IN BIG PROJECT, (WRITING REDUX TOOLKIT LOGIC) :-**



* so first create store for state management
* we will create another store that will track authentication. same we can create for post etc.
* now create authSlice.js file in store folder to keep track on authentication means user is authenicsted or not i will ask the store everytime(you can keep it features folder too).first import createSlice and first it wants initial state, then name then all reducers functions.
* create initial state in that keep status default false bcoz user is not authenticated by default and there is no userData still.
* now we have made slice, first we need to give the name and then initialstate then give reducers. also we need to export the authslice.reducer also we need to export the individual function of the reducers so that diff components can use for the state and dispatch purpose.
* first create login and logout reducer which keep track of user status and data if he is logged in status is true and if logout status is false.
* so now we will create two components header and footer in components folder. and create index.js file to export all components from there.
* now we will work on app.jsx , our main mostly task will be on this file to see when app loads user is logged in or not and this we can see from our state directly. if user is logged in we will show something and if not we will something else. based on it.
* In App.jsx - first we will create loading state - bcoz when you will fetch data from application from appwrite or if you do any network/database call we must loading state,bcoz network request may take time and if loading is true will show loading icon and if it is false will show some data based on conditional rendering.
* write loading state -   const \[loading, setLoading] = useState(true). initially i have set true bcoz when my app will mount , my loading state is true, bcoz on mean time useeffect is doing its work. and inside that useeffect i will set state data to false.
* now we will use usedispatch we want to send something like we want to get current user etc. and now we will use authservice that we have created. so import the object thst we have created there to access services.
* now when my application is loaded take useefffect and ask it, if user is logged in or not.so to get current user we will use getCurrentUser service from authservice. if i successfully get the data we will write in .then() and in that i will write dispatch code. and finally code will always run if my data is successfully passed or not it will run. we need to dispatch , if user get  logged in status will change and userData will get from action payload. so we will first dispatch login and in that we get userdata based on if else condition, if i get user data than do login else if there is no data, then we will dispatch logout (it means our state will still remain updated).
* now our loading is still true we need to off(false) this. in finally so setloading false, bcoz my whole task is completed above and finally i want my loading state to be false.
* now we will do conditional rendering.



###### **PRODUCTION GRADE REACT COMPONENTS () :-**



* okay so first of all we will create container component bcoz, all the content of our app will be within this container, so give classes for this and styling too.
* now copy the footer notes  and paste it and understand the code, and create and import logo component basic one in it.
* now we will work with header part where we will show to whom we want to show logout btn or not ,for that we will create LogoutBtn.jsx component. now after logout we need to dispatch or do some action after it, so we need to import actions or reducer from store so we need to import that one. first import useDispatch and then after that import authservice bcoz in this we have created logout service, and also import individual logout feature from the authSlice that we have created earlier.
* so now first use useDispatch() bcoz we need to dispatch something. then make a logout handler function bcoz it will be a logout btn functionality when it is clicked, so first use the service and call logout and it return promise, so after logout() is called and to handle promise use .then() and .catch() to handle it. in .then() use dispatch(logout()) bcoz after logout , i want the latest value to stay updated in store.
* now we will create links for the header part and also show logout btn based on conditional rendering, if user is logged in or not. so first import the components from index.js , also import useSelector bcoz to know in store whether user is logged in or not. and import useNavigate to forcefully navigate to other page.
* now first we will check if user logged in or not by checking status of it. 'authStatus'(from initialstate that we have created) thats why we have import useSelector. then use navigate code part.
* now create a an array of object to set header links for navbar so that we dont need to create diff btns separately, this is production grade style code, so that in future if need one more navitem , we can simply add the object there.
* now write the header part code , first create header , then container then nav and made it flex. first add logo part code and set it links to "/" then we need to show the Nav Items where based on conditional rendering like items.active part code and also show logout btn based on conditional rendering.
* now we will create common button component code. now it will accept children(btn text), type, bgColor, textColor, classname, props as a parameter. the classname is currently empty bcoz programmer may add its own styling later on also "...props" means it accepts all the properties that will be added later on.
* now we will create the common input field too, for that we need to use one hook 'forwardRef'. and understand the code based on new syntax and the rest code part is similar as previous.



###### **HOW TO USE REACT HOOK FORM IN PRODUCTION () :-**



* first we will create select button. go to components create selectButton.jsx code file. in that we have written different syntax for forward ref as compared to previous one.
* now we will create postcard component. now we need information which we will get from appwrite service in config.js file, so import this one too. and now we need to make postcard clickable so use Link tag and there we dont need to pass whole url just define the exact path there.
* Now we will create login component with react hook form.







