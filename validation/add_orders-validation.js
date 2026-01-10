const Joi = require("joi");
addOrders = (data) => {
  const JoiSchema = Joi.object({
    business_id: Joi.number().required().messages({
      "string.empty": `Business Id cannot be an empty.`,
      "any.required": `Business Id is a required.`,
    }),
    customer_id: Joi.number().required().messages({
      "string.empty": `Customer Id cannot be an empty.`,
      "any.required": `Customer Id is a required.`,
    }),
    menu_id: Joi.number().required().messages({
      "string.empty": `Menu Id cannot be an empty.`,
      "any.required": `Menu Id is a required.`,
    }),
    quantity: Joi.number().required().messages({
      "string.empty": `Quantity cannot be an empty.`,
      "any.required": `Quantity is a required.`,
    }),
    delivery_status: Joi.string().required().messages({
      "any.empty": `Delivery Status cannot be an empty.`,
      "any.required": `Delivery Status is a required.`,
    }),
  }).options({ abortEarly: false });
  return JoiSchema.validate(data);
};
module.exports = addOrders;
