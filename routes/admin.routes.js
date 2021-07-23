const express = require('express');
const router = express.Router({ mergeParams: true });
//putting mergeParams : true in so that the parameters from the parent router are merged even though i dont exactly

router.get("/", (req, res) => {
    res.render("admin");
}); //TODO: add isLoggedIn here after defining it in middleware


module.exports = router;