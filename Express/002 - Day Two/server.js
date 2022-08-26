const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log("First piece of middleware");
    next();
})
app.use((req, res , next) => {
    console.log("Second Piece of middleware");
    next();
})

mongoose.connect('mongodb://localhost:27017/zoo', {useNewUrlParser : true},
(error) => {
    if (error) {
        console.log("Cant connect to mongodb");
    } else {
        console.log("Connected to the DB")
    }
} )


//Import the route 
const lizardRoutes = require("./routes/lizardRoutes.js");
app.use("/lizards",lizardRoutes)

//Get Working -- Hello there - Status Code of 200

//Path URL Variables 
//Query
//Body 




app.get("/get/:id",(req, res) => {
    res.status(200).send(`Your id num is: ${req.params.id}`);
})

const server = app.listen(8080, () => {
    console.log("Will this work")
})