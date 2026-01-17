const Joi = require("joi");
updateMenu = (data) => {
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
    tax: Joi.number().required().messages({
      "any.empty": `Tax cannot be an empty.`,
      "any.required": `Tax is a required.`,
    }),
    availability: Joi.string().required().messages({
      "any.empty": `Availability cannot be an empty.`,
      "any.required": `Availability is a required.`,
    }),
  }).options({ abortEarly: false });
  return JoiSchema.validate(data);
};
module.exports = updateMenu;