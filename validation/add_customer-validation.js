const Joi = require("joi");
AddCustomer = (data) => {
  const JoiSchema = Joi.object({
    business_id: Joi.number().required().messages({
      "any.empty": `Business Id cannot be an empty.`,
      "any.required": `Business Id is a required.`,
    }),
    name: Joi.string().required().messages({
      "string.empty": `Name cannot be an empty.`,
      "any.required": `Name is a required.`,
    }),
    phone_number: Joi.number().required().messages({
      "any.empty": `Phone Number cannot be an empty.`,
      "any.required": `Phone Number is a required.`,
    }),
    order_id: Joi.number().required().messages({
      "any.empty": `Order Id cannot be an empty.`,
      "any.required": `Order Id is a required.`,
    }),
    discount_amount: Joi.string().required().messages({
      "any.empty": `Discount Amount cannot be an empty.`,
      "any.required": `Discount Amount is a required.`,
    }),
  }).options({ abortEarly: false });
  return JoiSchema.validate(data);
};
module.exports = AddCustomer;
