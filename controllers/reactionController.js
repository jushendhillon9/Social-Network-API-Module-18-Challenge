const Thought = require("../models");

module.exports = {
    async createReaction (req, res) {
        try {
            const result = await Thought.updateOne(
                {_id: req.params.thoughtId},
                { $push: { reactions: req.query.reactionId }}
            )
            if (result.nModified === 1) {
                res.json(result)
            }
            else {
                res.json({message: "Thought not found or not updated."})
            }
        }
        catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
    async deleteReaction (req, res) {
        try {
            const result = await Thought.updateOne(
                {_id: req.params.thoughtId},
                {$pull: {reactions: req.query.reactionId }}
            )
            if (result.nModified === 1) {
                res.json(result)
            }
            else {
                res.json({message: "Thought not found or deleted"})
            }
        }
        catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
}