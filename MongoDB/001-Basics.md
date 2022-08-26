# Intro - MongoDB

NoSQL - Not Only SQL 
Non-Relational Database

SQL - Excel Sheet 
Mongo - Word Document

BSON - Binary Object Notation 
JSON - Minimal and quite easy to setup

person {
    "name" : "Bob",
    "age" : 12,

}

Databases
-Database 
--Collections
---Documents --- ^
----Emdedded Documents 

CRUD - DB - DDL

Create -- use <db_name> - Creates a db if not exists, otherwise it switches to another DB.

Read -- Show dbs - Shows your local databases

Delete -- db.droptDatabase() -- Drop Database -- #RiskyBusiness - I deffo recommend you do your due dilengence to make sure you dont destroy your company

Update -- Take the database copy it and then rename
        <old_db>.copyDatabase(<old_db>, <new_db>);


CRUD - Collections 

Create - db.createCollection('<cl_name>') 

Read - show collections

Delete Collection - db.<cl_name>.drop()

Update -- db.<cl_name>.renameCollection(<rename>);

Exercise: Make a database using mongosh to store information of your liking. Create 2 collections, Update the name of one of these collections, show all the collections and delete one of the collections.

Crud for out Document

//Students 

db.students.insertOne({
    name : "Emily",
    age : 10
})

db.students.insertOne({
    name : "Mateusz",
    age : 10,
    likesBroccoli : true
})

db.students.insertMany([
    {
        name : "Tashfeen",
        age : 12
    } ,  
    {
        name : "Jabril",
        age : 11
    }
])

Structure 
Databases - A collection of Collections
Collections - contain documents
Documents - Contain our key value pairs

Everything that we've learnt from JS about these documents hold true

//Ensure that it is within a note pad
SuperPeople Db -
3 Collections - SuperHeroes, SuperVillians, UptoYou
4 documents in each, with at least two documents haveing a unique variable - Use insertOne at least once and then use insertMany 

students 

SELECT * FROM students;

Query Time -- 
                <Criteria> <The fields we want viewable>
db.students.find({}, {_id:false,name:true})

//Tashfeens age
db.students.find({name : "Tashfeen"}, {_id:false, age:true })

// findOne -- the first entry in the collection regardless of similarities
//UpdateOne -- 

db.students.findOne({age : 10}, {name: true})

//$set -- Query or General MongoDb commands 
// 
db.students.updateOne({name:"Emily"}, {$set :{age:100}})

$gt -- greater than
$lt -- less than 
$gte -- greater than or equal 
$lte -- ...
$ne -- Not Equal 

SQL -- ==, <, > ...
Its similar but totally not the same 

Arrays --
$in 
$nIn 

// Insert a new student but this time add an array variable

db.students.insertOne({
    name : "Charles",
    pet : ["Dougal", "Florence", "Lasgana"]
})

// ages are greater than 10
db.students.find( {age : {$lte: 10}}, {name: true});


