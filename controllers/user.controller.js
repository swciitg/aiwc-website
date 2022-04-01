const Research = require("../models/research");
const News = require("../models/latestNews");
const Partners = require("../models/partners");


exports.getHome = async (req, res) => {
    try{
        const research = await Research.find({}).sort("-creation");
        console.log(research);
        const latestNews = await News.find({}).sort("-creation");
        return res.render("home/index", {research: research,latestNews: latestNews});
    }
    catch(error){
        console.log(error);
    }
};

exports.getAbout = async (req, res) => {
    try{
        const partners = await Partners.find({}).sort("priority_number");
        console.log(partners)
        return res.render("home/aboutus",{partners: partners});
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
        const partners = await Partners.find({});
        // console.log("getPartners: ", partners);
        partners.map((partner) => {console.log(partner.people)})
        return res.render("home/partners/partners", {partners: partners});
    }
    catch(error){
        console.log(error);
    }
};

exports.getPartner = async (req, res) => {
    try{
        console.log(req.params.partner_id)
        const partner = await Partners.findById(req.params.partner_id);

        res.render("home/knowmore_partners", {partner: partner});

    }
    catch(error){
        console.log(error);
    }
};

exports.getPerson = async (req, res) => {
    try{
        // const partner = await Partners.findById(req.params.person_id);

        console.log(req.params.person_id)
        // const person = await Partners.find({people: {_id: req.params.person_id}});
        let partner = {"people":[]}
        partner = await Partners.find({"people._id": req.params.person_id});
        let person = {};
        console.log(partner)
        partner["people"].map((person_) => { if(person_._id == req.params.person_id){ person = person_}});
        console.log(person);
        res.send(person);
        // res.render("home/knowmore_people", {person: person});
    }
    catch(error){
        console.log(error);
    }
};