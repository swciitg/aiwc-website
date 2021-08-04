exports.isLoggedIn = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect(process.env.BASE_PATH + "/admin/login");
};

exports.isAdmin = function(req, res, next) {
    if (req.user.isAdmin) {
        return next();
    }
    return res.redirect(process.env.BASE_PATH + "/admin");
};