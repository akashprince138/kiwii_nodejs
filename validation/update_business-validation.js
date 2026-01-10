const Joi = require("joi");
updateBusiness = (data) => {
  const JoiSchema = Joi.object({
    id: Joi.number().required().messages({
      "any.empty": `Id cannot be an empty.`,
      "any.required": `Id is a required.`,
    }),
    business_name: Joi.string().required().messages({
      "string.empty": `Business Name cannot be an empty.`,
      "any.required": `Business Name is a required.`,
    }),
    owner_name: Joi.string().required().messages({
      "string.empty": `Owner name cannot be an empty.`,
      "any.required": `Owner Name is a required.`,
    }),
    address: Joi.string().required().messages({
      "string.empty": `Address cannot be an empty.`,
      "any.required": `Address is a required.`,
    }),
    expiry_date: Joi.string().required().messages({
      "any.empty": `Expiry Date cannot be an empty.`,
      "any.required": `Expiry Date is a required.`,
    }),
    status: Joi.string().required().messages({
      "any.empty": `Status cannot be an empty.`,
      "any.required": `Status is a required.`,
    }),
  }).options({ abortEarly: false });
  return JoiSchema.validate(data);
};
module.exports = updateBusiness;
