const Joi = require("joi");
ForgetPassword = (data) => {
  const JoiSchema = Joi.object({
    phone: Joi.number().required().messages({
          "any.empty": `Phone Number cannot be an empty.`,
          "any.required": `Phone Number is a required.`,
        }),
  }).options({ abortEarly: false });

  return JoiSchema.validate(data);
};
module.exports = ForgetPassword;
