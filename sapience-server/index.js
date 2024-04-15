
const express = require('express');
const app = express();
const port = process.env.PORT || 3000 ;
const cors = require('cors');
require('dotenv').config()

app.use(express.json())
app.use(cors())  

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

// Get latest forum posts
app.get('/api/forum', async (req, res) => {
  try {
    const posts = await ForumPost.find().sort({ createdAt: -1 }).limit(10);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Post a new forum message
app.post('/api/forum', async (req, res) => {
  const { username, userId, message } = req.body;
  const post = new ForumPost({ username, userId, message });
  try {
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})