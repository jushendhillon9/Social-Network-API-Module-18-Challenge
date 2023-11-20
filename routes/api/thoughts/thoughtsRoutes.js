const router = require("express").Router();
const {
    getAllThought,
    getOneThought,
    createThought,
    updateThought,
    deleteThought
} = require ("../../../controllers/thoughtsController")

router.route("/")
    .get(getAllThought)
    .post(createThought)
router.route("/:thoughtId")
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought)

module.exports = router;