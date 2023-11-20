const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { usersData, thoughtsData } = require("./data");

connection.once("open", async () => {
    try {
        // Drop collections if they exist
        await User.collection.drop();
        await Thought.collection.drop();

        // Create collections and add indexes using model methods
        await User.createCollection();
        await Thought.createCollection();

        // Add unique index to the "username" field
        await User.createIndexes();

        // Insert data using Mongoose models
        const insertedUsers = await User.insertMany(usersData);
        const insertedThoughts = await Thought.insertMany(thoughtsData);

        for (const thought of insertedThoughts) {
            const matchingUser = insertedUsers.find((user) => user.username === thought.username);
            if (matchingUser) {
                matchingUser.thoughts.push(thought._id);
                await matchingUser.save();
            }
        }

        for (const needFriendsUser of insertedUsers) {
            for (const friendlyUser of insertedUsers) {
                if (friendlyUser.username != needFriendsUser.username) {
                    needFriendsUser.friends.push(friendlyUser._id);
                }
            }
            await needFriendsUser.save();
        }


        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
});
