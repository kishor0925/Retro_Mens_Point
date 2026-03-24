const express = require('express');
const cors = require('cors');
const dns = require('dns');
const { MongoClient, ServerApiVersion } = require('mongodb');

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
        res.status('500').send('Error');
        console.log(error.message);
    }
})


app.listen(PORT);

