const Joi = require("joi");
addExpense = (data) => {
  const JoiSchema = Joi.object({
    business_id: Joi.number().required().messages({
      "string.empty": `Business Id cannot be an empty.`,
      "any.required": `Business Id is a required.`,
    }),
    name: Joi.string().required().messages({
      "string.empty": `Name cannot be an empty.`,
      "any.required": `Name is a required.`,
    }),
    price: Joi.number().required().messages({
      "any.empty": `Price cannot be an empty.`,
      "any.required": `Price is a required.`,
    }),
    quantity: Joi.string().required().messages({
      "any.empty": `Quantity cannot be an empty.`,
      "any.required": `Quantity is a required.`,
    }),
  }).options({ abortEarly: false });
  return JoiSchema.validate(data);
};
module.exports = addExpense;
