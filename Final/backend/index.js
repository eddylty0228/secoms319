const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Product = require("./dataSchema.js");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/images", express.static("images"));

mongoose.connect("mongodb://127.0.0.1:27017/final",
{
dbName: "final",
useNewUrlParser: true,
useUnifiedTopology: true,
}
);
const port = process.env.PORT || 8080;
const host = "localhost";
app.listen(port, () => {
console.log(`App listening at http://%s:%s`, host, port);
});

//all data
app.get("/", async (req, resp) => {
    const query = {};
    const allData = await Product.find(query);
    console.log(allData);
    resp.send(allData);
    });

    //id data
    app.get("/:id", async (req, resp) => {
        const i = req.params.id
        const query = { id: i };
        const oneProduct = await Product.findOne(query);
        console.log(oneProduct);
        resp.send(oneProduct);
        });

    //category data backend // not working with id data. if you need to use uncomment and comment out id data
// app.get("/:category", async (req, resp) => {
//     const cat = req.params.category;
//     const query = { category: cat };
//     const categories = await Product.find(query);
//     console.log(categories);
//     resp.send(categories);
//     });

