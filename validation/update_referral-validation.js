const Joi = require("joi");
referral = (data) => {
  const JoiSchema = Joi.object({
    id: Joi.number().required().messages({
      "string.empty": `Id cannot be an empty.`,
      "any.required": `Id is a required.`,
    }),
    referral_code: Joi.string().required().messages({
      "string.empty": `Referral Code cannot be an empty.`,
      "any.required": `Referral Code is a required.`,
    }),
    status: Joi.string().required().messages({
      "string.empty": `Status cannot be an empty.`,
      "any.required": `Status is a required.`,
    }),
  }).options({ abortEarly: false });

  return JoiSchema.validate(data);
};
module.exports = referral;
