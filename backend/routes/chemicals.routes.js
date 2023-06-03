const router = require('express').Router();
const chemicalsController = require('../controllers').chemicalsController;
// const { productValidation } = require('../../validations');
// const validate = require('../../middlewares/validate');

router.get('/',
  chemicalsController.getAllChemicals);

module.exports = router;