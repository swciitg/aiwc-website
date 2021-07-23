const express = require('express');
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const BASE_PATH = process.env.BASE_PATH;

app.set('view engine', 'ejs');

const adminRoutes = require('./routes/admin.routes');

app.use(BASE_PATH + "/admin", adminRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});