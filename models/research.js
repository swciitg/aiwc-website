const mongoose = require('mongoose');

const ResearchSchema = new mongoose.Schema({
    title: { type: String, required: true },
    link: { type: String, required: true },
    creation: { type: Date, default: Date.now }
});

const Research = new mongoose.model('Research', ResearchSchema);
module.exports = Research;