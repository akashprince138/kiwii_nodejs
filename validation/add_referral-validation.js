const Joi = require("joi");
referral = (data) => {
  const JoiSchema = Joi.object({
    business_id: Joi.number().required().messages({
      "string.empty": `Business Id cannot be an empty.`,
      "any.required": `Business Id is a required.`,
    }),
    referral_code: Joi.string().required().messages({
      "string.empty": `Referral Code cannot be an empty.`,
      "any.required": `Referral Code is a required.`,
    }),
  }).options({ abortEarly: false });

  return JoiSchema.validate(data);
};
module.exports = referral;
