const express = require('express');
const router = express.Router({ mergeParams: true });
const passport = require('passport');
const { isLoggedIn, isAdmin } = require("../middleware");
//putting mergeParams : true in so that the parameters from the parent router are merged even though i dont exactly

router.get("/", isLoggedIn, (req, res) => {
    res.render("admin");
});

router.get("/login", (req, res) => {
    if (req.isAuthenticated()) return res.redirect(process.env.BASE_PATH + '/admin');
    return res.render("login");
});

router.get('/login/outlook', passport.authenticate('azure_ad_oauth2'));

router.get('/login/outlook/redirect',
    passport.authenticate('azure_ad_oauth2', { failureRedirect: process.env.BASE_PATH + '/admin/login' }),
    (req, res) => {
        // Successful authentication, redirect home.
        res.redirect(process.env.BASE_PATH + '/admin');
    });

module.exports = router;



// router.get('/login/outlook',
//     passport.authenticate('windowslive', {
//         scope: ['openid', 'profile']
//     })
// ); CHANGED


// router.get('/login/outlook/redirect',
//     passport.authenticate('windowslive', { failureRedirect: process.env.BASE_PATH + '/admin/login' }),
//     (req, res) => {
//         // Successful authentication, redirect home.
//         res.redirect(process.env.BASE_PATH + '/admin');
//     }); CHANGED