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
    .get(getOneThought)
    .post(createThought)
router.route("/:userId")
    .put(updateThought)
    .delete(deleteThought)

module.exports = router;