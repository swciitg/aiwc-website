const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const session = require("express-session");
const helmet = require("helmet");
require("dotenv").config();
const app = express();

//constants defined in .env file
const PORT = process.env.PORT || 8080;
const BASE_PATH = process.env.BASE_PATH;
const DB_URI = process.env.MONGO_URI;

require("./config/passport")(passport);

//to serve static files
app.use(BASE_PATH, express.static(__dirname + "/public"));

//importing the routers
const adminRoutes = require('./routes/admin.routes');
// const noticeRoutes = require('./routes/notice.routes');
// const announcementRoutes = require('./routes/announcement.routes.js');
// const formRoutes = require('./routes/form.routes');
// const linkRoutes = require('./routes/link.routes');

//connecting to DB
mongoose.connect(
    DB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    (err) => {
        if (err) console.log(err.message);
        else console.log("DB connection established");
    });

app.use(
    session({
        secret: "A very nice secret for the AIWC ",
        cookie: { maxAge: 180 * 60 * 1000 },
        resave: false,
        saveUninitialized: false
    })
);

app.use(helmet());
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    // res.locals.basePath = BASE_PATH;
    next();
});

app.use(passport.initialize());
app.use(passport.session());

//for parsing of application/json type POST data
app.use(express.json({ limit: "50mb" }));
//for parsing of application/x-www-form-urlencoded POST data
app.use(
    express.urlencoded({
        limit: "50mb",
        extended: true,
        parameterLimit: 50000,
    })
);

app.set('view engine', 'ejs');

app.use(BASE_PATH + "/admin", adminRoutes);
// app.use(BASE_PATH + "/admin/notice", noticeRoutes);
// app.use(BASE_PATH + "/admin/announcement", announcementRoutes);
// app.use(BASE_PATH + "/admin/uploads", adminUploadsRoutes);
// app.use(BASE_PATH + "/admin/form", formRoutes);
// app.use(BASE_PATH + "/admin/link", linkRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});