const express = require("express");
const router = express.Router({ mergeParams: true });

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/news_pdf");
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname;
    cb(null, Date.now().toString() + fileName);
  },
});
const latestNewsController = require("../controllers/latestNews.controller");
const upload = multer({ storage: storage });

router.get("/", latestNewsController.getLatestNews);
router.get("/add", latestNewsController.addLatestNews);
router.post("/", upload.single("latestNews"), latestNewsController.postLatestNews);
router.post("/find",upload.single("latestNews"),latestNewsController.findLatestNews);
router.get("/:id", latestNewsController.getEditForm);
router.get("/pdf/:id", latestNewsController.getOneLatestNews);
router.put("/:id", upload.single("latestNews"), latestNewsController.editLatestNews);
router.delete("/:id", latestNewsController.deleteLatestNews);

module.exports = router;

