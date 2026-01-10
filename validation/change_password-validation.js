const Joi = require("joi");
ChangePassword = (ChangePasswordData) => {
  const JoiSchema = Joi.object({
    password: Joi.string().required().messages({
      "string.empty": `Password cannot be an empty.`,
      "any.required": `Password is a required.`,
    }),
  }).options({ abortEarly: false });

  return JoiSchema.validate(ChangePasswordData);
};
module.exports = ChangePassword;
