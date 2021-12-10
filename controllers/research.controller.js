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

exports.findResearch = async(req, res) => {
    try {
        const val = req.body.mySearch1;
        var research = await Research.find({
            title: { $regex: val, $options: "i" }
        });
        res.render("research/index", { research });
    } catch (error) {
        console.log(error.message);
    }
}

exports.editResearchForm = async(req, res) => {
    try {
        const research = await Research.findById(req.params.id);
        return res.render("research/edit", { research });
    } catch (err) {
        console.log(err.message);
    }

};

exports.editResearch = async(req, res) => {
    try {
        const { title, link } = req.body;
        const data = { title, link };
        await Research.findByIdAndUpdate(req.params.id, data);
        return res.redirect(process.env.BASE_PATH + "/admin/research");
    } catch (err) {
        console.log(err.message);
    }
};

exports.deleteResearch = async(req, res) => {
    try {
        await Research.findByIdAndRemove(req.params.id);
        return res.redirect(process.env.BASE_PATH + "/admin/research")
    } catch (err) {
        console.log(err.message);
    }
};