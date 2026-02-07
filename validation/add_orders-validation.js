const Joi = require("joi");

const addOrders = (data) => {
  const JoiSchema = Joi.object({
    business_id: Joi.number().required().messages({
      "any.required": "Business Id is required",
      "number.base": "Business Id must be a number",
    }),

    order_no: Joi.string().required().messages({
      "any.required": "Order number is required",
      "string.empty": "Order number cannot be empty",
    }),

    customer_name: Joi.string().allow(null, "").messages({
      "string.base": "Customer name must be a string",
    }),

    customer_mobile: Joi.string().allow(null, "").messages({
      "string.base": "Customer mobile must be a string",
    }),

    payment_method: Joi.string()
      .valid("cash", "upi", "card", "online")
      .required()
      .messages({
        "any.only": "Invalid payment method",
        "any.required": "Payment method is required",
      }),

    order_status: Joi.string()
      .valid("pending", "paid", "cancelled")
      .required()
      .messages({
        "any.only": "Invalid order status",
        "any.required": "Order status is required",
      }),

    items: Joi.array()
      .items(
        Joi.object({
          menu_id: Joi.number().required().messages({
            "any.required": "Menu Id is required",
            "number.base": "Menu Id must be a number",
          }),

          menu_name: Joi.string().required().messages({
            "any.required": "Menu name is required",
            "string.empty": "Menu name cannot be empty",
          }),

          price: Joi.number().required().messages({
            "any.required": "Price is required",
            "number.base": "Price must be a number",
          }),

          quantity: Joi.number().required().messages({
            "any.required": "Quantity is required",
            "number.base": "Quantity must be a number",
          }),
        })
      )
      .min(1)
      .required()
      .messages({
        "array.base": "Items must be an array",
        "array.min": "At least one item is required",
        "any.required": "Items are required",
      }),
  }).options({ abortEarly: false });

  return JoiSchema.validate(data);
};

module.exports = addOrders;
