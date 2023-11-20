const connection = require("../config/connection");
const { User, Thought } = require("../models")
const { usersData, thoughtsData } = require("./data")

connection.once("open", async () => {
    let userCheck = await connection.db.listConnections({ name: "User"}).toArray();
    if (userCheck.length === 1){
        await connection.dropCollection("User")
    }

    let thoughtCheck = await connection.db.listConnections({name: "Thought"}).toArray();
    if (thoughtCheck.length ===1) {
        await connection.dropCollection("Thought");
    }

    await User.collection.insertMany(usersData)
    await Thought.collection.insertMany(thoughtsData);
    process.exit(0);
})