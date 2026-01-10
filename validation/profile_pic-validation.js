const Joi = require("joi");
profilePic = (profilePicData) => {
  const JoiSchema = Joi.object({
    id: Joi.string().required().messages({
      "string.empty": `Id cannot be an empty.`,
      "any.required": `Id is a required.`,
    }),
  }).options({ abortEarly: false });

  return JoiSchema.validate(profilePicData);
};
module.exports = profilePic;
