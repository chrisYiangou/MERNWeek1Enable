const express = require('express');

const app = express();
app.use(express.json())

//Delete Takes in an id and then prints it out 

app.delete("/delete/:dinosaur", (req) => {
    console.log(req.params.dinosaur)
})

// Read - Take in a URL Query and print it out 
app.get("/get", (req) => {
    const name = req.query.name
    console.log(typeof name)
} )

//Create Take in a body and then print it
app.post("/post", (req) => {
    console.log(req.body);
})

//Update which Takes in an id and prints out a body
app.put("/put/:id", (req) => {
    console.log(req.params.id);
    
    const {name, power} = req.body;
    //^Destructuring --> Very common way of props or useEffect 
    console.log(name + power);
})

const server = app.listen(5016, () => {
    console.log(`You are connected to the server Yay`)
})