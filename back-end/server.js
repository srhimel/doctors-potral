const express = require('express')
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const { MongoClient } = require('mongodb');

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pt0xz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const run = async () => {
    try {
        await client.connect();

    }
    finally {
        // await client.close();
    }
}

run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port, () => {
    console.log('server is running');
})