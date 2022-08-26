//This file here will be concerned with my Lizards 

//Import the Router function from express 
const router = require('express').Router();
const {Lizard} = require('../persistance/models/lizardSchema');

// All of our go belw and use router rather than app

router.get("/readAll", (req, res) => {
    console.log("You're reading the lizards");
    res.status(202).send("READING LIZARDS");
});

// Post
router.post("/create", (req, res) => {
    //Through a body request 
    // req.body

    const lizard = new Lizard(req.body);

    lizard.save().then((result) => {
        res.status(201).send(`${result.lizardName} added to the database`)
    }).catch((err) => {
        console.log(err)
    })
})

router.get("/getOne/:name", (req, res) => {
    //Reference the Schema -> 
    //Find One by name 
    const myLizard = Lizard.findOne({"lizardName" : req.params.name}, (err, lizard) => {
        if (err) return res.status(400).send(err);
        return res.status(200).send(lizard);
    });

    

})

module.exports = router;

