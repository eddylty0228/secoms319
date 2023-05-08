const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { Product, Collection } = require("./dataSchema.js");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/images", express.static("images"));

mongoose.connect("mongodb://127.0.0.1:27017/final", {
  dbName: "final",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
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
  const i = req.params.id;
  const query = { id: i };
  const oneProduct = await Product.findOne(query);
  console.log(oneProduct);
  resp.send(oneProduct);
});

//category data backend // now working!!!!
app.get("/category/:category", async (req, resp) => {
  const category = req.params.category;
  const query = { category: category };
  const categories = await Product.find(query);
  console.log(categories);
  resp.send(categories);
});
// add to collection
app.post("/addToCollection", async (req, res) => {
  console.log(req.body);
  const p_id = req.body._id;
  const pid = req.body.id;
  const pname = req.body.name;
  const pdescription = req.body.description;
  const pcategory = req.body.category;
  const pimage = req.body.image;
  const prate = req.body.rating.rate;
  const pcount = req.body.rating.count;
  const formData = new Collection({
    _id: p_id,
    id: pid,
    name: pname,
    description: pdescription,
    category: pcategory,
    image: pimage,
    rating: { rate: prate, count: pcount },
  });
  try {
    // await formData.save();
    await Collection.create(formData);
    const messageResponse = { message: `Product ${p_id} added to collection` };
    res.send(JSON.stringify(messageResponse));
  } catch (err) {
    console.log("Error while adding a new product:" + err);
  }
});
//show from collection
app.get("/mycollection/collection", async (req, res) => {
  try {
    const allItems = await Collection.find({});
    res.json(allItems);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
//todo delete from collection
app.delete("/delete", async (req, res) => {
  console.log("Delete :", req.body);
  try {
    const query = { _id: req.body._id };
    await Collection.deleteOne(query);
    const messageResponse = {
      message: `Product deleted`,
    };
    res.send(JSON.stringify(messageResponse));
  } catch (err) {
    console.log("Error while deleting :" + p_id + " " + err);
  }
});