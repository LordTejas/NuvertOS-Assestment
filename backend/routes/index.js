const express = require('express');
const chemicalsRoute = require('./chemicals.routes');

const router = express.Router();

router.use('/chemicals', chemicalsRoute);

module.exports = router;