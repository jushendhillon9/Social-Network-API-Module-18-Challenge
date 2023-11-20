const router = require("express").Router();
const reactionRoutes = require("./reactionRoutes")
const thoughtsRoutes = require("./thoughtsRoutes")

router.use("/thoughts", reactionRoutes);
router.use("/thoughts", thoughtsRoutes);

module.exports = router;