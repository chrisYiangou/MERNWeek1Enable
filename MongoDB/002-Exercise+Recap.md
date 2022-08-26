2: Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine for all the documents in the collection restaurant. 

-- db.resturants.find({}, {restaurant_id : 1, name: 1, borough : 1, cuisine: 1});

4:  Write a MongoDB query to display the fields restaurant_id, name, borough and zip code, but exclude the field _id for all the documents in the collection restaurant.

--  db.resturants.find({}, {restaurant_id : 1, name: 1, borough : 1, "address.zipcode" : 1});

--Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the borough Bronx

db.resturants.find({borough: "Bronx"}, {}).limit(5).skip(5)

--Write a MongoDB query to find the restaurants which locate in latitude value less than -95.754168.

db.resturants.find({"address.coord.0" : {$lt : -95.754168}})

 Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Wil' as first three letters for its name

Regular Expressions, aka Computer Wizz 

-- /_-/ -- split()

-- /^-_/ -- At the beggining 
-- /-_$/ --> At the end

db.resturants.find({name : /^Wil/}, {name: 1, borough : 1, cuisine : 1})

Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as last three letters for its name.

db.resturants.find({name : /ces$/}, {name: 1, borough : 1, cuisine : 1})

//Recap --

Pokemon Database 

Lets create the db -
use <pokemans>

//delete the database?
db.dropDatabase();

//Create a collection
db.createCollection("pokedex");

//Bulbasaur -- Pokemon 
//Name, Type, Weight

--> Insert into the collection

db.pokedex.insertOne({name : "Bulbasaur", weight : 10, type: ["Grass", "Poison"]});

This time here I want to add more than at the same time 

Squirtle and Charmander 

db.pokedex.insertMany(
    [
        {
            name : "Squirtle", weight : 12, type: ["Water"]
        },
        {
            name : "Gengar", weight : 41, type : [
                "Ghost", "Poison"]
        }
    ]
)

--Update -- add a variable?

db.pokedex.updateOne({name : "Bulbasaur"}, { $set : {isCute : true}} )

// Expressions are for our comparators 
<=, >= ...
less than - weight : { $lt : 12}
greater than - weight : {$gte : 12}
                     $eq
not equal - weight : {$ne : 12}

embedded documents - JS - Object within an object 
Documents can have a Document within a document 

Collections         Collection 
Shoes                Shoe Brands 

// Shoe Example
shoe {
    name : "Super Cool Shoe",
    brand : {
        name : "Gucci",
        averageCost : 200,
        currentCEO : "Guccimos"
    },
    cost : 150
}

Pokemon -- Belongs to a trainer 

db.pokedex.insertOne({
    name : "Lapras",
    trainer : {
        name : "Blue",
        isCurrentChampion : false
    }
})

query the object
//Use quotation marks
//Choice between dot notation and bracket notation
//Use . notation when you can but if you cant 1,2 3
use the brackets

// 100 - documents nested inside of an nested documeted

db.pokedex.find({"trainer[name]" : "Red"} , {name : true})


//Db 

Create a database 
-3 collections -- General, 2 Specifics
-5 documents each and I want nested documents included for at least three of the said docunments in each collection