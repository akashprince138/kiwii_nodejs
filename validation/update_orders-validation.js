const Joi = require("joi");
updateOrders = (data) => {
  const JoiSchema = Joi.object({
    id: Joi.number().required().messages({
      "string.empty": `Id cannot be an empty.`,
      "any.required": `Id is a required.`,
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
module.exports = updateOrders;
