const express = require('express');
const cors = require('cors');
const dns = require('dns');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const PORT = 5444;
dns.setServers(['8.8.8.8','8.8.4.4']);

const app = express()

app.use(express.json());
app.use(cors());


const uri = "mongodb+srv://rtm:rtms@cluster0.d5ttmrk.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let database;

async function run() {
  try {
    await client.connect();
    database = await client.db('kdb').collection('kcl');
    console.log("MongoDB! connected");
  } finally {

    // await client.close();
  }
}
run().catch(console.dir);


app.post('/productupload' , async(req, res) => {
    try {
        const data = req.body;
        const result = await database.insertOne(data);
        res.send(result)
    } catch (error) {
        console.log(error.message);
    }
})

// app.get('/hoodies' , async(req, res) => {
//   try {
//     const result = await database.find({category : 'hoodies'}).toArray();
//     res.send(result);
//   } catch (error) {
//       console.log(error.message)
//   }
// })

app.get('/products' , async(req, res) => {
  try {
    const {category, isTrending, isNewArrival} = req.query;
    let filter = {};

    if(category){
      filter.category = category.toLocaleLowerCase().trim();
    }

     if (isTrending ) {
      filter.isTrending = isTrending === 'true';
    }

    if (isNewArrival) {
      filter.isNewArrival = isNewArrival === 'true';
    }

    const result = await database.find(filter).toArray();
    res.send(result);
  } catch (error) {
      console.log(error.message)
  }
})

app.get('/getdata/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const result = await database.findOne({
      _id: new ObjectId(id)
    });

    res.send(result); 
  } catch (error) {
    console.log(error.message);
  }
});



app.patch('/editdata/:id' , async(req, res) => {

  const id = req.params.id;
  const obj = {_id : new ObjectId(id)}
  const data = req.body;
  const updateddata = {$set : {...data}};
  const option = {upsert : true};
  const result = await database.updateOne(obj, updateddata, option);
  res.send(result);
})


app.delete('/del/:id' , async(req, res) => {

  const id = req.params.id;
  const obj = {_id : new ObjectId(id)};
  const result = await database.deleteOne(obj);
  res.send(result);
  
})

app.listen(PORT);

