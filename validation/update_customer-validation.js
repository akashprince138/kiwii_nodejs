const Joi = require("joi");
UpdateCustomer = (data) => {
  const JoiSchema = Joi.object({
    id: Joi.number().required().messages({
      "any.empty": `Id cannot be an empty.`,
      "any.required": `Id is a required.`,
    }),
    name: Joi.string().required().messages({
      "string.empty": `Name cannot be an empty.`,
      "any.required": `Name is a required.`,
    }),
    phone_number: Joi.number().required().messages({
      "any.empty": `Phone Number cannot be an empty.`,
      "any.required": `Phone Number is a required.`,
    }),
    payment_status: Joi.string().required().messages({
      "any.empty": `Payment Status cannot be an empty.`,
      "any.required": `Payment Status is a required.`,
    }),
    discount_amount: Joi.string().required().messages({
      "any.empty": `Discount Amount cannot be an empty.`,
      "any.required": `Discount Amount is a required.`,
    }),
  }).options({ abortEarly: false });
  return JoiSchema.validate(data);
};
module.exports = UpdateCustomer;
