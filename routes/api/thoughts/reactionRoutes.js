const router = require("express").Router();
const {
createReaction,
deleteReaction
} = require("../../../controllers/reactionController");


router.route("/:thoughtId/reactions") //REMEMBER TO INCLUDE THE QUERY PARAMETER FOLLOWING THE /REACTIONS
    .post(createReaction)
    .delete(deleteReaction);

module.exports = router;