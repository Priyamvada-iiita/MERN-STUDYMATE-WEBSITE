
const express = require('express');
const app = express();
const port = process.env.PORT || 3000 ;
const cors = require('cors');
require('dotenv').config()
console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWORD)
app.use(express.json())
app.use(cors())  

//username priyadarshanipriyamvada
//password   8DnnK96ml0hcLM8U
// 

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@studymate-cluster.o9a4yn2.mongodb.net/?retryWrites=true&w=majority&appName=studymate-cluster`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create db
    const db = client.db("mernStudymatePosts");
    const studymateCollections = db.collection("demoStudymatePosts") ;
    //post a post
    app.post("/post-studymatepost", async(req, res)=>{
      const body = req.body;
      body.createAt = new Date();
      // console.log(body)
      const result = await studymateCollections.insertOne(body);
      if(result.insertedId){
        return res.status(200).send(result);
      }
      else{
        return res.status(404).send({
          message: "canot insert ",
          status :false
        })
      }
    })


    app.get("/all-posts", async(req, res)=>{
      const studymateposts = await studymateCollections.find().toArray()
      res.send(studymateposts);
    })
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})