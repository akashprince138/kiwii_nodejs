const Joi = require("joi");
addMenu = (data) => {
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
    availability: Joi.string().required().messages({
      "any.empty": `Availability cannot be an empty.`,
      "any.required": `Availability is a required.`,
    }),
    tax: Joi.number().required().messages({
      "any.empty": `Tax cannot be an empty.`,
      "any.required": `Tax is a required.`,
    }),
    stock_type: Joi.string()
      .valid("limited", "unlimited")
      .required()
      .messages({
        "any.only": "Stock Type must be limited or unlimited.",
        "any.required": "Stock Type is required.",
      }),

    stock_quantity: Joi.when("stock_type", {
      is: "limited",
      then: Joi.number()
        .integer()
        .min(0)
        .default(0)
        .required()
        .messages({
          "number.base": "Stock Quantity must be a number.",
          "any.required": "Stock Quantity is required for limited stock.",
        }),
      otherwise: Joi.number()
        .default(0)
        .messages({
          "number.base": "Stock Quantity must be a number.",
        }),
    }),
  }).options({ abortEarly: false });
  return JoiSchema.validate(data);
};
module.exports = addMenu;
