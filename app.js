const express = require('express');
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const BASE_PATH = process.env.BASE_PATH;

app.set('view engine', 'ejs');

const adminRoutes = require('./routes/admin.routes');
const noticeRoutes = require('./routes/notice.routes');
const announcementRoutes = require('./routes/announcement.routes.js');
const formRoutes = require('./routes/form.routes');
const linkRoutes = require('./routes/link.routes');


app.use(BASE_PATH + "/admin", adminRoutes);
app.use(BASE_PATH + "/admin/notice", noticeRoutes);
app.use(BASE_PATH + "/admin/announcement", announcementRoutes);
app.use(BASE_PATH + "/admin/uploads", adminUploadsRoutes);
app.use(BASE_PATH + "/admin/form", formRoutes);
app.use(BASE_PATH + "/admin/link", linkRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});