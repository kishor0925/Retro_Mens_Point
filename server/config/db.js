const dns = require('dns');
const { MongoClient, ServerApiVersion} = require('mongodb');


dns.setServers(['8.8.8.8','8.8.4.4']);

const uri = "mongodb+srv://rtm:rtms@cluster0.d5ttmrk.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let database;

async function connectDB() {
  try {
    await client.connect();
    database = await client.db('kdb').collection('kcl');
    console.log("MongoDB! connected");
  } finally {
    
    // await client.close();
  }
}
function getDB(){
    return database;
}
module.exports = { connectDB , getDB}