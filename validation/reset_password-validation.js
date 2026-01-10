const Joi = require("joi");
ResetPassword = (data) => {
  const JoiSchema = Joi.object({
    phone: Joi.number().required().messages({
      "any.empty": `Phone Number cannot be an empty.`,
      "any.required": `Phone Number is a required.`,
    }),
    otp: Joi.number().required().messages({
      "any.empty": `OTP cannot be an empty.`,
      "any.required": `OTP is a required.`,
    }),
    password: Joi.string().required().messages({
      "string.empty": `Password cannot be an empty.`,
      "any.required": `Password is a required.`,
    }),
  }).options({ abortEarly: false });

  return JoiSchema.validate(data);
};
module.exports = ResetPassword;
