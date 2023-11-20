const router = require("express").Router();
const userRoutes = require("./api/users");
const thoughtRoutes = require("./api/thoughts");

router.use("/api", userRoutes);
router.use("/api", thoughtRoutes);

module.exports = router;