const { Thought } = require("../models");

module.exports = {
    async createReaction (req, res) {
        try {
            const newReaction = {
                reactionBody: req.body.reactionBody,
                username: req.body.username,
            };
            const result = await Thought.findOneAndUpdate( //need to create a reaction inside of a specific thought, need to use updateOne because we are technically updating the thought with a reaction (which is inside of it)
                {_id: req.params.thoughtId},
                { $push: { reactions: newReaction }},
                { new: true }
            )
            
            if (result) {
                res.json(result);
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
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.query.reactionId } } }
            );
            if (result.modifiedCount === 1) {
                res.json({message: "Reaction successfully deleted"})
            }
            else {
                res.json({message: "Reaction not found or deleted"})
            }
        }
        catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
}