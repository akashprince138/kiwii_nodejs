const Joi = require("joi");

const updateOrders = (data) => {
  const JoiSchema = Joi.object({
    id: Joi.number().required().messages({
      "any.required": "Id is required.",
      "number.base": "Id must be a number.",
    }),

    order_status: Joi.string()
      .valid("pending", "paid", "cancelled")
      .required()
      .messages({
        "any.required": "Order status is required.",
        "any.only": "Invalid order status.",
        "string.empty": "Order status cannot be empty.",
      }),

    payment_method: Joi.string()
      .valid("cash", "upi", "card", "online")
      .required()
      .messages({
        "any.required": "Payment method is required.",
        "any.only": "Invalid payment method.",
        "string.empty": "Payment method cannot be empty.",
      }),
  }).options({ abortEarly: false });

  return JoiSchema.validate(data);
};

module.exports = updateOrders;
