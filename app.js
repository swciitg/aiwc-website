const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const session = require("express-session");
const helmet = require("helmet");
const methodOverride = require("method-override");
require("dotenv").config();
const app = express();

//constants defined in .env file
const PORT = process.env.PORT || 8000;
const BASE_PATH = process.env.BASE_PATH;
const DB_URI = process.env.MONGO_URI;

// require("./config/passport")(passport); CHANGED
require("./config/passport");

//to serve static files
app.use(BASE_PATH, express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
//importing the routers
const adminRoutes = require('./routes/admin.routes');
const latestNewsRoutes = require('./routes/latestNews.routes');
const partnersRoutes = require('./routes/partners.routes');
// const peopleRoutes = require('./routes/people.routes');
const researchRoutes = require('./routes/research.routes');
const userRoutes = require('./routes/user.routes');

//connecting to DB
mongoose.connect(
    "mongodb+srv://Adi_23:23122001@cluster0.cv101.mongodb.net/AIWC?retryWrites=true&w=majority", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    (err) => {
        if (err) console.log("bb");
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

app.use(express.static('/public'));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.basePath = BASE_PATH;
    next();
});

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

app.use(BASE_PATH + "/", userRoutes);
app.use(BASE_PATH + "/admin", adminRoutes);
app.use(BASE_PATH + "/admin/latestNews", latestNewsRoutes);
app.use(BASE_PATH + "/admin/partners", partnersRoutes);
// app.use(BASE_PATH + "/admin/people", peopleRoutes);
app.use(BASE_PATH + "/admin/research", researchRoutes);
// app.use(BASE_PATH + "/admin/link", linkRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});