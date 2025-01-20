const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;


app.get("/", (req, res) => {
    res.send("Welcome to my mongoAPI")
})

app.post("/blogpost", (req, res) => {
    res.send("this is a postrequest")
});


mongoose.
connect("mongodb+srv://kakashidota:123456admin@robinsapi.8jc0x.mongodb.net/Products-API?retryWrites=true&w=majority&appName=RobinsAPI")
.then(() => {
    console.log("connected to mongo");
    app.listen(PORT, () => {
        console.log("listening to 3000");
    });
  
});