const Joi = require("joi");
UpdateRatingReview = (data) => {
  const JoiSchema = Joi.object({
    rating: Joi.number().required().messages({
      "any.empty": `Ratingcannot be an empty.`,
      "any.required": `Rating is a required.`,
    }),
    review: Joi.string().required().messages({
      "string.empty": `review cannot be an empty.`,
      "any.required": `review is a required.`,
    }),
  }).options({ abortEarly: false });
  return JoiSchema.validate(data);
};
module.exports = UpdateRatingReview;
