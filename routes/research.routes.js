const express = require('express');
const router = express.Router({ mergeParams: true });

const researchController = require('../controllers/research.controller');
router.get('/', researchController.getResearch);
router.get('/add', researchController.addResearchForm);
router.post('/', researchController.addResearch);
router.post('/find', researchController.findResearch);
router.get('/:id', researchController.editResearchForm);
router.put('/:id', researchController.editResearch);
router.delete('/:id', researchController.deleteResearch);
module.exports = router;