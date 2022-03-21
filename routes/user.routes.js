//this is to create the backend for the actual frontend page
const express = require('express');
const router = express.Router({ mergeParams: true });
const userController = require("../controllers/user.controller");
router.get("/", userController.getHome);
router.get("/partners", userController.getPartners);
router.get("/about", userController.getAbout);
router.get("/partners/:partner_id", userController.getPartner);
router.get("/partners/:person_id", userController.getPerson);
router.get("/contactUs", userController.getContactUs);
module.exports = router;
