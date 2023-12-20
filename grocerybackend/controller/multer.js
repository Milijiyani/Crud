const multer = require("multer");
const path = require("path");


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const absolutePath = path.join(__dirname, "../public/images");
    // console.log("fileeeeeeee",file)
    // console.log("cb",cb)
    cb(null, absolutePath);
    // cb(null, "../public/images");
  },
  filename: function (req, file, cb) {
    // console.log("fileeeeeeee",file)
    cb(null, Date.now() + "-" + file.originalname);
  },
});

exports.upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
    } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
}
});