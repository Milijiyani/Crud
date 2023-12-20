var express = require('express');
var router = express.Router();
const demoController = require("../controller/demoController");
const Multer = require("../controller/multer");


router.get('/getdata', demoController.getDemoPage);
router.post('/createdata', Multer.upload.single('image'), demoController.addDemo);
router.put('/updatedata/:id', Multer.upload.single('image'), demoController.UpdateDemoPage);
router.delete('/deletedata/:id', demoController.DeleteDemoPage);
// router.post('/demo',demoController.addDemo);
module.exports = router;