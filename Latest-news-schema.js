
const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({

  title: {
       type: String,
       required: true },
  description: {
       type: String, 
       required: true },
  path: {
       type: String, 
       required: true },
  priority_number: {
       type: Number, 
       required: true },
});

module.exports = mongoose.model("Latest News", NewsSchema);