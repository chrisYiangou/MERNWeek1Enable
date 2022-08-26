# Express

What is Express?

Minimialist framework to handle our web functionality in a node.js app.
Limited functionality BUTTTT very compatiable with custom and external middleware
--Middleware is software that enables one or more kinds of communication or connectivity between two or more applications 
-- ^^-- We can use npm to download more things 

        Client <--> Server 
Express therefore acts as our API - Spring was doing this now Express is

CRUD -- 

HTTP Request were for CRUD
C - Create - Post 
R - Read - Get 
U - Update - Put/Patch  [Put - replaced by a completely new object, Patch - edits a variable(s), object remains]
D - Delete 

## Install Express 
    1) Create a new NPM project
    2) npm i express
    3) npm install -g nodemon


# Exercise 
Create an server.js that listens to a specific port 
Access the port on your browsetr
Print hello world on access to port on browser

# Request Handling 

Request Handling is specifying what you want the app to do, and requests it from the front end 
-- URL
-- the path is very important, where the browser sends information to a api and then the api does something 
The Method : GET
--A Body: JSON

Body: the data that the clinet sends to be processed to the server side


//Create four request handlers for each of the CRUD functionality using the apprioate function
//to enact one of the four CRUD methods.
// console.log(Method Type inside)

003 -- Requests 

// URL Parameters - Id number, package name

//Query Params -- ?q 

// Send a body of JSON or equivilant -
XML,YAML

// From the four CRUD methods we made before 
// Delete - Take in an id and then print it out (URL Param)
// READ - Take in URL Query and print it out 
// CREATE - TAKE in a body (using Postman) and then print it out 
//Update -- Take in an id and body and print both out

Responses 

These are the server sends to the client, 
Without specifying a response the clinet will hanfg and wait for some data

res.send() -> Pass our information
res.status() -> status code