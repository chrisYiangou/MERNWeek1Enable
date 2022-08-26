# Middleware 

Middleware is used to aid the communication between two nodes, client and server

Middleware in expresss is a function with 
REQ, RES, NEXT 

If a function has next as a callback, when it is complete it will find the next subsequent function with the word NEXT

# Routing 

Get post delete, update

-- Zoo -- animals
--Zoo/Lizards/post 
--Zoo/Monkets/post 

Http Requests (app.get("/zooStuff")) - routes
So far all we've really done is just do it on our server.js

..Get --

Routes Folder 
    -Lizards 
    -Monkeys
    -Crocodiles


Within Mongo -- You made a db 
Routes -- 3 Routes -- Should have CRUD functionality (
    res.send("DELETED [superhero])
)

Add some middleware and see if you can add middleware to a custom route 

# Mongoose 

Mongoose allows us to model our MongoDB schema 
and as well as this allows us to connect to a database in Express 

- URI - similar URL  == Connect to a service 

npm i mongoose

# What are we doing with Mongoose 

1) Connecting to MongoDB in our index.js files
2) Creating Lizard Schemas / + Other embedded documednts in a schema file
3) Modifying our routes so they post, get, update and delete from the database

# Exercise 

I want you to spend some time now to first of all connect to MongoDB,
Create your schemas -- for the routes you have currently made
-- CRUD, post - save()
    -- You must do your research and figure out how we can do this