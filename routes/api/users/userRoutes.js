const router = require("express").Router();
const {
    getAllUsers,
    getUsersThoughtsAndFriends,
    createUser,
    updateUser,
    deleteUser
} = require("../../../controllers/userController");


//routes to getAllUsers and to createUser, relies on req.body
router.route("/")
    .get(getAllUsers)
    .post(createUser)

router.route("/:userId")
    .get(getUsersThoughtsAndFriends)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;