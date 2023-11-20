const { User } = require("../models")

module.exports = {
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        }
        catch (err) {
            console.error({message: err})
            res.status(500).json(err);
        }
    },
    async getUsersThoughtsAndFriends(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId }).populate('thoughts').populate(`friends`);
            res.json(user);
        } catch (err) {
            console.error({ message: err });
            res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try {
            const post = await User.create(req.body);
            res.json(post);
        }
        catch (err) {
            console.error({message: err})
            res.status(500).json(err);
        } 
    },
    async updateUser(req, res) {
        try {
            const updatedUser = await User.findOneAndUpdate(
                {_id: req.params.userId},
                { 
                    $set: {
                        username: req.body.username,
                        email: req.body.email,
                    },
                },
                { new: true }
            )
            res.json(updatedUser);
        }
        catch (err) {
            console.error({message: err})
            res.status(500).json(err)
        }
    },
    async deleteUser(req, res) {
        try {
            const deletedUser = await User.findOneAndDelete(
                {_id: req.params.userId},
            )
            if (deletedUser) {
                res.json(deletedUser);
            } 
            else {
                res.status(404).json({message: "User not found"})
            }
        }
        catch (err) {
            console.error({message: err})
            res.status(500).json(err)
        }
    }
}