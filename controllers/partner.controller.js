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
        const { name, contact_person, website, place, isIndian } = req.body;
        var pic;
        if (req.file) pic = req.file.filename;
        var newPartner = new Partner({
            name,
            pic,
            contact_person,
            website,
            place,
            isIndian
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
exports.getPeople = async(req, res) => {
    try {
        const partner = await Partner.findById(req.params.id);
        if (!partner) {
          return res.redirect("/aiwc/admin/partners");
        }
        const people = partner.people;
        people.sort(compare);
        return res.render("partners/people/index", { partner, people });
      } catch (error) {
        console.log(error.message);
      }
};
exports.addPersonForm = async(req, res) => {
    try {
        const partner = await Partner.findById(req.params.id);
        if (!partner) {
          return res.redirect("/aiwc/admin/partners");
        }
        return res.render("partners/people/add", { partner });
      } catch (error) {
        console.log(error.message);
      }
};
exports.addPerson = async(req, res) => {
    try {
        const id = req.params.id;
        const { name, qualification, designation, employer, personal_website, home_page, email,priority_number } = req.body;
        var pic;
        if (req.file) pic = req.file.filename;
        const partner = await Partner.findById(id);
        if (!partner) {
          return res.redirect("/aiwc/admin/partners");
        }
        const person = { name, pic, qualification, designation, employer, personal_website, home_page, email,priority_number } ;
        let newPerson = partner.people.create(person);

        partner.people.push(newPerson);
        const updatedList = await partner.save();
    
        if (!updatedList) {
          return res.redirect("/aiwc/admin/partners");
        }
        return res.redirect(`/aiwc/admin/partners/${id}/people`);
      } catch (error) {
        console.log(error.message);
      }
};
exports.editPersonForm = async(req, res) => {
    try {
        const partner_id = req.params.id;
        const person_id = req.params.person_id;
        const partner = await Partner.findById(partner_id);
    
        if (!partner) {
            return res.redirect("/aiwc/admin/partners");
          }
    
        const person = partner.people.find((person) => person.id === person_id);
        if (!person) {
            return res.redirect(`/aiwc/admin/partners/${partner_id}/people`);
        }
        return res.render("partners/people/edit", { partner, person });
      } catch (error) {
        console.log(error.message);
      }
};
exports.editPerson = async(req, res) => {
  try {
    const partner_id = req.params.id;
    const person_id = req.params.person_id;
    const { name, qualification, designation, employer, personal_website, home_page, email,priority_number } = req.body;
    const partner = await Partner.findById(partner_id);

    if (!partner) {
      return res.redirect("/aiwc/admin/partners");
    }

    let people = partner.people;

    people.forEach((person) => {
      if (person.id === person_id) {
        person.name = name;
        person.qualification = qualification;
        person.designation = designation;
        person.employer = employer;
        person.personal_website = personal_website;
        person.home_page = home_page;
        person.email = email;
        person.priority_number = priority_number;    
      }
    });
    partner.people = people;
    await partner.save();
    return res.redirect(`/aiwc/admin/partners/${partner_id}/people`);
  } catch (error) {
    console.log(error.message);
  }
};
exports.deletePerson = async(req, res) => {
    try {
        const partner_id = req.params.id;
        const person_id = req.params.person_id;
        const partner = await Partner.findById(partner_id);
        if (!partner) {
          return res.redirect("/aiwc/admin/partners");
        }
        let people = partner.people;
        console.log(people);
        people = people.filter((person) => person.id != person_id);
        console.log(people);
        partner.people = people;
        await partner.save();
        return res.redirect(`/aiwc/admin/partners/${partner_id}/people`);
      } catch (error) {
        console.log(error.message);
      }
};

const compare = (a, b) => {
    return a.priority_number - b.priority_number;
  };
  