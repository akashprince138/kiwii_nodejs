const Joi = require("joi");
addPayment = (data) => {
  const JoiSchema = Joi.object({
    business_id: Joi.number().required().messages({
      "string.empty": `Business Id cannot be an empty.`,
      "any.required": `Business Id is a required.`,
    }),
    amount: Joi.number().required().messages({
      "any.empty": `Amount cannot be an empty.`,
      "any.required": `Amount is a required.`,
    }),
    status: Joi.string().required().messages({
      "any.empty": `Status cannot be an empty.`,
      "any.required": `Status is a required.`,
    }),
  }).options({ abortEarly: false });
  return JoiSchema.validate(data);
};
module.exports = addPayment;
