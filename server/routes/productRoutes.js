const express = require("express");
const router = express.Router();
const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");




router.post("/productupload", async(req, res) => {
  try {
    const database = getDB();
    const data = req.body;
    const result = await database.insertOne(data);
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/products", async(req, res) => {
  try {
    const { category, isTrending, isNewArrival } = req.query;
    let filter = {};

    if (category) {
      filter.category = category.toLocaleLowerCase().trim();
    }

    if (isTrending) {
      filter.isTrending = isTrending === "true";
    }

    if (isNewArrival) {
      filter.isNewArrival = isNewArrival === "true";
    }
    const database = getDB();
    const result = await database.find(filter).toArray();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/getdata/:id", async(req, res) => {
  try {
    const id = req.params.id;
    const database = getDB();
    const result = await database.findOne({
      _id: new ObjectId(id),
    });

    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

router.patch("/editdata/:id", async(req, res) => {
  
  const database = getDB();
  const id = req.params.id;
  const obj = { _id: new ObjectId(id) };
  const data = req.body;
  const updateddata = { $set: { ...data } };
  const option = { upsert: true };

  const result = await database.updateOne(obj, updateddata, option);
  res.send(result);
});

router.delete("/del/:id", async (req, res) => {

  const database = getDB();
  const id = req.params.id;
  const obj = { _id: new ObjectId(id) };
  const result = await database.deleteOne(obj);
  res.send(result);
});

module.exports = router;
