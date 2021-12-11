const Partner = require('../models/partners');

exports.getPartners = async(req, res) => {
    try {
        const partners = await Partner.find({});
        return res.render("partners/index", { partners });
    } catch (err) {
        console.log(err.message);
    }

};
exports.addPartnerForm = (req, res) => {
    try {
        return res.render("partners/add");
    } catch (err) {
        console.log(err.message);
    }
};
exports.addPartner = async(req, res) => {
    try {
        const { name, contact_person, website } = req.body;
        var newPartner = new Partner({
            name,
            contact_person,
            website
        });

        await newPartner.save();
        return res.redirect(process.env.BASE_PATH + "/admin/partners");
    } catch (err) {
        console.log(err.message);
    }
};
exports.editPartnerForm = async(req, res) => {
    try {
        const partner = await Partner.findById(req.params.id);
        return res.render("partners/edit", { partner });
    } catch (err) {
        console.log(err.message);
    }

};
exports.editPartner = async(req, res) => {
    try {
        const { name, contact_person, website } = req.body;
        const data = { name, contact_person, website };
        await Partner.findByIdAndUpdate(req.params.id, data);
        return res.redirect(process.env.BASE_PATH + "/admin/partners");
    } catch (err) {
        console.log(err.message);
    }
};
exports.deletePartner = async(req, res) => {
    try {
        await Partner.findByIdAndRemove(req.params.id);
        return res.redirect(process.env.BASE_PATH + "/admin/partners")
    } catch (err) {
        console.log(err.message);
    }
};
exports.getPeople = async(req, res) => {};
exports.addPersonForm = (req, res) => {};
exports.addPerson = async(req, res) => {};
exports.editPersonForm = async(req, res) => {};
exports.editPerson = async(req, res) => {};
exports.deletePerson = async(req, res) => {};