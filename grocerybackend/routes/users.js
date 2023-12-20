var express = require('express');
var router = express.Router();
const registerController = require("../controller/registrerController");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/register',registerController.addRegisterPage);
router.post('/login',registerController.addLoginPage);

module.exports = router;