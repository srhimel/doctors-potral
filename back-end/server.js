const express = require('express')
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const { MongoClient } = require('mongodb');
const admin = require("firebase-admin");

//middleware
app.use(cors());
app.use(express.json());

//firebase admin

const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pt0xz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function verifyToken(req, res, next) {
    if (req.headers?.authorization?.startsWith('Bearer ')) {
        const token = req.headers?.authorization.split(' ')[1];
        try {
            const decodedUser = await admin.auth().verifyIdToken(token);
            req.decodeEmail = decodedUser.email;
        }
        catch { }
    }
    next();
}

const run = async () => {
    try {
        await client.connect();
        const database = client.db("doctorPortal");
        const appointmentCollection = database.collection('appointments');
        const userCollection = database.collection('users');

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

        // save user to db

        app.post('/users', async (req, res) => {
            const user = req.body;
            const result = await userCollection.insertOne(user);
            res.json(result);
        })

        app.put('/users', async (req, res) => {
            const user = req.body;
            const query = { email: user.email }
            const update = { $set: user }
            const options = { upsert: true }
            const result = await userCollection.updateOne(query, update, options);
            res.json(result);
            console.log(result)
        })
        app.put('/users/admin', verifyToken, async (req, res) => {
            const user = req.body;
            const requester = req.decodeEmail;
            if (requester) {
                const requesterAccount = await userCollection.findOne({ email: requester });
                if (requesterAccount.role === 'admin') {
                    const query = { email: user.email }
                    const update = { $set: { role: 'admin' } }
                    const result = await userCollection.updateOne(query, update)
                    res.json(result);
                }
            }
            else {
                res.status(403).json({ message: 'You do not have access' })
            }

        })

        app.get('/users/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email: email }
            const result = await userCollection.findOne(query);
            let isAdmin = false;
            if (result?.role === 'admin') {
                isAdmin = true;
            }
            res.send({ admin: isAdmin });
        })


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