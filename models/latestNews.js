const mongoose = require("mongoose");

const LatestNewsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  path: { type: String, required: true },
  creation: { type: Date, default: Date.now },
});

module.exports = mongoose.model("latestNews", LatestNewsSchema);