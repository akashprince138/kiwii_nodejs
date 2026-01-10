const Joi = require("joi");
addBusiness = (data) => {
  const JoiSchema = Joi.object({
    // user_id: Joi.number().required().messages({
    //   "string.empty": `User Id cannot be an empty.`,
    //   "any.required": `User Id is a required.`,
    // }),
    business_name: Joi.string().required().messages({
      "string.empty": `Business name cannot be an empty.`,
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
    start_date: Joi.string().required().messages({
      "any.empty": `Start date cannot be an empty.`,
      "any.required": `Start date is a required.`,
    }),
    expiry_date: Joi.string().required().messages({
      "any.empty": `Expiry Date cannot be an empty.`,
      "any.required": `Expiry Date is a required.`,
    }),
  }).options({ abortEarly: false });
  return JoiSchema.validate(data);
};
module.exports = addBusiness;
