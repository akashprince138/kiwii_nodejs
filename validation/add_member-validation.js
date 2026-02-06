const Joi = require("joi");
addMember = (addMemberData) => {
  const JoiSchema = Joi.object({
    business_id: Joi.number().required().messages({
      "string.empty": `Business Id cannot be an empty.`,
      "any.required": `Business Id is a required.`,
    }),
    name: Joi.string().required().messages({
      "string.empty": `Name cannot be an empty.`,
      "any.required": `Name is a required.`,
    }),
    phone: Joi.string().required().messages({
      "string.empty": `Phone Number cannot be an empty.`,
      "any.required": `Phone Number is a required.`,
    }),
    password: Joi.string().required().messages({
      "string.empty": `Password cannot be an empty.`,
      "any.required": `Password is a required.`,
    }),
    role_id: Joi.number().required().messages({
      "string.empty": `Role cannot be an empty.`,
      "any.required": `Role is a required.`,
    }),
    parent_id: Joi.number().required().messages({
      "string.empty": `Parent Id cannot be an empty.`,
      "any.required": `Parent Id is a required.`,
    }),
  }).options({ abortEarly: false });

  return JoiSchema.validate(addMemberData);
};
module.exports = addMember;
