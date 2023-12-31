const { User } = require("../models");

module.exports = {
    async addFriend (req, res) {
        try {
            const result = await User.updateOne(
                {_id: req.params.userId},
                { $push: { friends: req.params.friendId } } //$push indicates I want to add addedID to friends array
            )
            if (result.modifiedCount === 1) {
                res.json({message: "Friend successfully added"})
            }
            else {
                res.json({message: "User not found or friend not added"})
            }
        }
        catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
    async deleteFriend (req, res) {
        try {
            const deletedFriend = await User.updateOne(
                {_id: req.params.userId},
                { $pull: {friends: req.params.friendId}}
            )
            console.log(deletedFriend);
            if (deletedFriend.modifiedCount === 1) {
                res.json({message: "Friend successfully unadded"})
            }
            else {
                res.json({message: "User not found or friend not unadded"})
            }
        }
        catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
}