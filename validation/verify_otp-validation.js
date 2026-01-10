const Joi = require("joi");
verifyOTP = (loginData) => {
  const JoiSchema = Joi.object({
    phone: Joi.number().required().messages({
      "any.empty": `Phone Number cannot be an empty.`,
      "any.required": `Phone Number is a required.`,
    }),
    otp: Joi.string().required().messages({
      "string.empty": `OTP cannot be an empty.`,
      "any.required": `OTP is a required.`,
    }),
  }).options({ abortEarly: false });

  return JoiSchema.validate(loginData);
};
module.exports = verifyOTP;
