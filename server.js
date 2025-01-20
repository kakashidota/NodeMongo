require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;
const Product = require("./models/productModel");
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Welcome to my mongoAPI")
});

app.post("/blogpost", (req, res) => {
    res.send("this is a postrequest")
});

app.put("/api/product/:id", async(req, res) => {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if(!product){
        return res.status(400).json({message: "Prodcut does not exisst"});
    }

    res.status(200).json(product);

});

app.get("/api/product/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500);
    }
});




app.get("/api/products", async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.post("/api/product", async (req, res) => {
   
    try {
       const product = await Product.create(req.body);
       res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(404);
    }

});


mongoose.
connect(process.env.MONGO_URI)
.then(() => {
    console.log("connected to mongo");
    app.listen(PORT, () => {
        console.log("listening to 3000");
    });
  
});