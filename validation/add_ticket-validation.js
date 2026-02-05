const Joi = require("joi");
AddTicket = (data) => {
  const JoiSchema = Joi.object({
    business_id: Joi.number().required().messages({
      "string.empty": `Business Id cannot be an empty.`,
      "any.required": `Business Id is a required.`,
    }),
    user_id: Joi.number().required().messages({
      "string.empty": `User Id cannot be an empty.`,
      "any.required": `User Id is a required.`,
    }),
    subject: Joi.string().required().messages({
      "string.empty": `Subject cannot be an empty.`,
      "any.required": `Subject is a required.`,
    }),
    description: Joi.string().required().messages({
      "string.empty": `Subject cannot be an empty.`,
      "any.required": `Subject is a required.`,
    }),
    status: Joi.string().required().messages({
      "string.empty": `Subject cannot be an empty.`,
      "any.required": `Subject is a required.`,
    }),
    assigned_to: Joi.number().optional().allow(null, '').messages({
      "string.base": `Assigned to must be a string.`,
    }),
  }).options({ abortEarly: false });
  return JoiSchema.validate(data);
};
module.exports = AddTicket;
