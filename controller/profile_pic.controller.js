let ProfilePic = require("../model/profile_pic.model.js");
const profilePicValidation = require("../validation/profile_pic-validation.js");
const { fileUploadData } = require("../middleware/profile_pic");
exports.create = async (req, res) => {
  try {
    const error = profilePicValidation(req.body);
    if (error.error) {
      return res.status(400).send({
        status:false,
        message: error.error.details[0].message,
      });
    }
    // console.log("req", req.files);
    if (!req.files || !req.files.profile_pic) {
      res.status(400).send({
        status:false,
        message: "Please upload profile picture.",
      });
      return;
    }
    if (req.files.profile_pic) {
      const name = await fileUploadData(req.files && req.files.profile_pic);
      req.body.profile_pic = name;
    }
    const profilePic = new ProfilePic({
      id: req.body.id,
      profile_pic: req.body.profile_pic,
    });
    ProfilePic.create(profilePic, (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Some error occurred while profilePic.",
          status:false,
        });
      else res.send(data);
    });
  } catch (error) {
    console.log("error", error);
  }
};
