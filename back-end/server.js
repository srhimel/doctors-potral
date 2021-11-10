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
        const database = client.db("doctorPortal");
        const appointmentCollection = database.collection('appointments');
        // get appointments
        app.get('/appointments', async (req, res) => {
            const email = req.query.email;
            const date = new Date(req.query.date);
            const query = { email: email, date: date.toLocaleDateString() }
            const cursor = appointmentCollection.find(query);
            const result = await cursor.toArray();
            res.send(result);
        })
        // post appointments
        app.post('/appointments', async (req, res) => {
            const data = req.body;
            const result = await appointmentCollection.insertOne(data);
            res.json(result);
        });
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