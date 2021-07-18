const express = require('express');
const app = express();
const HomeURL="/aiwc";
const adminRoutes = require('./routes/admin.routes');
const noticeRoutes = require('./routes/notice.routes');
const announcementRoutes = require('./routes/announcement.routes.js');
const formRoutes = require('./routes/form.routes');
const linkRoutes = require('./routes/link.routes');


app.set("view engine","ejs");

app.use(HomeURL+"/admin",adminRoutes);
app.use(HomeURL+"/admin/notice",noticeRoutes);
app.use(HomeURL+"/admin/announcement",announcementRoutes);
app.use(HomeURL+"/admin/uploads",adminUploadsRoutes);
app.use(HomeURL+"/admin/form",formRoutes);
app.use(HomeURL+"/admin/link",linkRoutes);

app.use()