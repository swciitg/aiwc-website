const Research = require("../models/research");
const News = require("../models/latestNews");
const Partners = require("../models/partners");


exports.getHome = async (req, res) => {
    try{

        const research = await Research.find({}).sort("-creation");
        const latestNews = await News.find({}).sort("-creation");
        return res.render("home/index", research, latestNews);
    }
    catch(error){
        console.log(error);
    }
};

exports.getAbout = async (req, res) => {
    try{
        const partners = Partners.find({}).sort("priority_number");
        return res.render("home/aboutus", partners);
    }
    catch(error){
        console.log(error);
    }
};

exports.getContactUs = async (req, res) => {
    try{
        return res.render("home/contactus");
    }
    catch(error){
        console.log(error);
    }
};

exports.getPartners = async (req, res) => {
    try{
        const partners = Partners.find({}).sort("priority_number");
        return res.render("home/partners", partners);
    }
    catch(error){
        console.log(error);
    }
};

exports.getPartner = async (req, res) => {
    try{
        const partner = Partners.findById(req.params.partner_id);
        res.render("home/knowmore_partners", partner);

    }
    catch(error){
        console.log(error);
    }
};

exports.getPerson = async (req, res) => {
    try{
        const partner = Partners.findById(req.params.partner_id);
        const person = partner.people.findById(people_id);
        res.render("home/knowmore_people", person);
        
    }
    catch(error){
        console.log(error);
    }
};