const express = require('express');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());

const name = "Chris";

//Get URL Parameters
app.get("/get/:id", (req,res) => {
    console.log(req.params.id);
    const savedId = req.params.id;
    res.status(200).send(`Hey ${name + savedId} how you doing`);
})

// Exercise - Add a relevant response to each of your request with an appropriate status code to go with it



app.get("/getSuper", (req) => {
    console.log(req.query);
})

//JSON Postman send a response
app.post("/post", (req) => {
    const body = req.body;
    console.log(JSON.stringify(body).split(/,/));
})

app.put("/put", () => {
    console.log("put");
})

//
app.delete("/delete", () => {
    console.log("Delete")
})




//What port -- What we doing
const server = app.listen(5015, () => {
    console.log(`The server had activated on ${server.address().port}`);
    // return "<h1> Hello World </h1>"
})

//Created an application that very very much is connected to a port and prints a message in the console.