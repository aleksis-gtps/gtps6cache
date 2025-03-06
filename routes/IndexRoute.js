// importing necessary modules
const router = require("express").Router();

// setting the route
router.get("/", (req, res) => {
    res.send("Protected by @GTPS-6 Community");
});

// exporting the router
module.exports = router;
