const Joi = require("joi");
updatePurchase = (data) => {
  const JoiSchema = Joi.object({
    id: Joi.number().required().messages({
      "string.empty": `Id cannot be an empty.`,
      "any.required": `Id is a required.`,
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
module.exports = updatePurchase;