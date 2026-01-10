const Joi = require("joi");
loginOTP = (loginData) => {
  const JoiSchema = Joi.object({
    phone: Joi.number().required().messages({
      "any.empty": `Phone Number cannot be an empty.`,
      "any.required": `Phone Number is a required.`,
    }),
  }).options({ abortEarly: false });

  return JoiSchema.validate(loginData);
};
module.exports = loginOTP;
