const express = require("express");
const router = new express.Router();
const multer = require("multer");
//img storage path
const imgConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `image=${Date.now()}.${file.originalname}`);
  },
});

//image filter
const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("only image will be accepted"));
  }
};
const upload = multer({
  storage: imgConfig,
  fileFilter: isImage,
});
router.post("/register", upload.single("photo"), async (req, res) => {
  const { filename } = req.file;
  const { fname } = req.body;
  if (!fname || !filename) {
    res
      .status(401)
      .json({ status: 401, message: "required all data correctly" });
  } else {
    try {
      const date = new moment(new Date()).format("YYYY-MM-DD");
      const userdata = new users({
        fname: fname,
        imagpath: filename,
        date: date,
      });
      const finaldata = await userdata.save();
      res.status(201).json({ status: 201, finaldata });
    } catch (error) {
      res.status(401).json({ status: 401, error });
    }
  }
});

module.exports = router;
