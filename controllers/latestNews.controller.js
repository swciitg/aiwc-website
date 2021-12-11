const latestNews = require("../models/latestNews");

const fs = require("fs");

exports.getLatestNews = async (req, res) => {
  try {
    const news = await latestNews.find({});
    news.sort(compare);
    return res.render("latestNews/index", { news });
  } catch (error) {
    console.log(error.message);
  }
};

exports.addLatestNews = async (req, res) => {
  try {
    return res.render("latestNews/add");
  } catch (error) {
    console.log(error.message);
  }
};

exports.postLatestNews = async (req, res) => {
  try {
    var { title, description,link } = req.body;
    const path = req.file ? req.file.filename : link;

    if (!path) {
      return res.redirect("/aiwc/admin/latestNews/add");
    }

    const newLatestNews = await new latestNews({
      title, description,path,}).save();

    if (!newLatestNews) {
      res.redirect("/aiwc/admin/latestNews/add");
    }
    
    return res.redirect("/aiwc/admin/latestNews");
  } catch (error) {
    console.log(error.message);
  }
};

exports.findLatestNews = async (req, res) => {
  try {
    const val = req.body.mySearch1;
    var news = await latestNews.find({
          $or: [
            { title: { $regex: val, $options: "i" } },
            { description: { $regex: val, $options: "i" } },
          ],
    });
    news.sort(compare);
    res.render("latestNews/index", {news});
  } catch (error) {
    console.log(error.message);
  }
};

exports.getEditForm = async (req, res) => {
  try {
    const news = await latestNews.findById(req.params.id);
    return res.render("latestNews/edit", {news});
  } catch (error) {
    console.log(error.message);
  }
};

exports.editLatestNews = async (req, res) => {
  try {
    var { title, description, link } = req.body;
    // var data = { title, description, link };
    const path = req.file ? req.file.filename : link;
    let data;
    if (!req.file && !link) {
      data = { title, description};
    } else {
      data = { title, description, path};
    }
    await latestNews.findByIdAndUpdate(req.params.id,data);
    return res.redirect(process.env.BASE_PATH + "/admin/latestNews");
  } catch (error) {
    console.log(error.message);
  }
};

exports.getOneLatestNews = async (req, res) => {
  try {
    const id = req.params.id;
    const news = await latestNews.findById(id);
    const filePath = "uploads/news_pdf/" + news.path;
    console.log(filePath);
    fs.readFile(filePath, (err, data) => {
      res.contentType("application/pdf");
      return res.send(data);
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteLatestNews = async (req, res) => {
  try {
    const id = req.params.id;
    const news = await latestNews.findById(id);
    if (news.path.indexOf("https://") == -1) {
      fs.unlinkSync(`uploads/news_pdf/${news.path}`);
      console.log("successfully deleted!");
    }
    await latestNews.findByIdAndRemove(id);
    return res.redirect("/aiwc/admin/latestNews");
  } catch (err) {
    console.log(err);
    return res.redirect("/aiwc/admin/latestNews");
  }
};

const compare = (a, b) => {
  return b.creation - a.creation;
};
