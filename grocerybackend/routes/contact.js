var express = require('express');
var router = express.Router();
const contactController = require("../controller/contactController");
/* GET users listing. */

router.post('/contact',contactController.addContactPage);
module.exports = router;