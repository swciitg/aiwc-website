const mongoose = require('mongoose');

const PeopleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: { type: String },
    qualification: { type: String, required: true },
    designation: { type: String, required: true },
    employer: { type: String, required: true },
    personal_website: { type: String, required: true },
    home_page: { type: String, required: true },
    email: { type: String, required: true },
    priority_number: { type: Number, required: true },
});

const PartnerSchema = new mongoose.Schema({ 
    name: { type: String, required: true },
    pic: { type: String },
    contact_person: { type: String, required: true },
    website: { type: String },
    creation: { type: Date, default: Date.now },
    people: [PeopleSchema]
});

module.exports = mongoose.model('Partner', PartnerSchema);