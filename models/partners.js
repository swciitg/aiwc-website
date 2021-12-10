const mongoose = require('mongoose');

const PeopleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: { type: String, required: true },
    qualification: { type: String, required: true },
    designation: { type: String, required: true },
    employer: { type: String, required: true },
    personal_webiste: { type: String, required: true },
    home_page: { type: String, required: true },
    email: { type: String, required: true },
})