const router = require('express').Router();
const chemicalsController = require('../controllers').chemicalsController;
// const { productValidation } = require('../../validations');
// const validate = require('../../middlewares/validate');

router.get('/',
  chemicalsController.getAllChemicals);

router.get('/:chemicalId', chemicalsController.getChemicalById);

router.post('/', 
  chemicalsController.createChemical);

router.delete('/:chemicalId', 
chemicalsController.deleteChemical);

module.exports = router;