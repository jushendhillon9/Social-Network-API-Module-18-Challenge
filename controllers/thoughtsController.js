const { Thought } = require("../models");

module.exports = {
    async getAllThought (req, res) {
        try {
            const allThoughts = await Thought.find();
            res.json(allThoughts);
        }
        catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },
    async getOneThought (req, res) {
        try {
            const thought = await Thought.findOne({_id: req.params.thoughtId})
            res.json(thought);
        }
        catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },
    async createThought (req, res) {
        try {
            const newThought = await Thought.create(req.body);
            if (newThought) {
                res.json(newThought)
            }
            else {
                res.json({message: "Error: Thought not created"})
            }
        }
        catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },
    async updateThought (req, res) {
        try {
            const updatedThought = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {
                    $set: {
                        thoughtText: req.body.thoughtText,
                    }
                },
                { new: true }
            )
            res.json(updatedThought);
        }
        catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },
    async deleteThought (req, res) {
        try {
            const deletedThought = await Thought.findOneAndDelete(
                {_id: req.params.thoughtId},
            )
            if (deletedThought) {
                res.json(deletedThought)
            }
            else {
                res.json({error: "User not found or not deleted"})
            }
        }
        catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    }
}