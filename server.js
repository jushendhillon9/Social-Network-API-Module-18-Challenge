//express and app configurations
const express = require("express");
const app = express();
const port = 3001;

//mongodb configurations
const { MongoClient } = require("mongodb");
const connectionStringURI = "mongodb://127.0.0.1:27017";
const client = new MongoClient(connectionStringURI);

//creation of database for mongo
let db;
const dbName = "socialNetworkApiDB";

client.connect()
    .then(() => {
        console.log('Connected successfully to MongoDB');
        db = client.db(dbName); //equivalent to use statement (create and use)

        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`);
        })
    })
    .catch((err) => {
        console.error('Mongo connection error: ', err.message);
    })

app.use(express.json());

app.post("/create", (req,res) => { //so this is the first route that is being created to handle the creation of entries to the database
    db.collection
})