const express = require('express');
const router = express.Router({ mergeParams: true });

const partnerController = require('../controllers/partner.controller');
router.get('/', partnerController.getPartners);
router.get('/add', partnerController.addPartnerForm);
router.post('/', partnerController.addPartner);
router.get('/:id', partnerController.editPartnerForm);
router.put('/:id', partnerController.editPartner);
router.delete('/:id', partnerController.deletePartner);

router.get('/:id/people', partnerController.getPeople);
router.get('/:id/people/add', partnerController.addPersonForm);
router.post('/:id/people', partnerController.addPerson);
router.get('/:id/people/:person_id', partnerController.editPersonForm);
router.put(':id/people/:person_id', partnerController.editPerson);
router.delete(':id/people/:person_id', partnerController.deletePerson);

module.exports = router;