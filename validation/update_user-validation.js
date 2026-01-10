const Joi = require("joi");
updateUser = (updateUserData) => {
  const JoiSchema = Joi.object({
    id: Joi.string().required().messages({
      "string.empty": `Id cannot be an empty.`,
      "any.required": `Id is a required.`,
    }),
    name: Joi.string().required().messages({
      "string.empty": `Name cannot be an empty.`,
      "any.required": `Name is a required.`,
    }),
    // role_id: Joi.string().required().messages({
    //   "string.empty": `Role cannot be an empty.`,
    //   "any.required": `Role is a required.`,
    // }),
    status: Joi.string().required().messages({
      "string.empty": `Status cannot be an empty.`,
      "any.required": `Status is a required.`,
    }),
  }).options({ abortEarly: false });

  return JoiSchema.validate(updateUserData);
};
module.exports = updateUser;
