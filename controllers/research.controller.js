const Research = require('../models/research');

exports.getResearch = async(req, res) => {
    try {
        const research = await Research.find({}).sort('-creation');
        return res.render('research/index', { research });
    } catch (err) {
        console.log(err.message);
    }
};

exports.addResearchForm = (req, res) => {
    try {
        return res.render("research/add");
    } catch (error) {
        console.log(error.message);
    }
};

exports.addResearch = async(req, res) => {
    try {
        const { title, link } = req.body;
        var newResearch = new Research({
            title,
            link,
        });

        await newResearch.save();
        return res.redirect(process.env.BASE_PATH + "/admin/research");
    } catch (err) {
        console.log(err.message);
    }
};

exports.editResearchForm = async(req, res) => {
    try {
        const research = await Research.findById(req.params.id);
        return res.render("research/edit", { research });
    } catch (err) {
        console.log(err.message);
    }

};

exports.editResearch = async(req, res) => {

};

exports.deleteResearch = async(req, res) => {

};