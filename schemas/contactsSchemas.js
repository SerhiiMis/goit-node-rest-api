import Joi from "joi";

export const createContactSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `"name" is required`,
    "string.empty": `"name" cannot be empty`,
  }),
  email: Joi.string().email().required().messages({
    "any.required": `"email" is required`,
    "string.email": `"email" must be a valid email`,
    "string.empty": `"email" cannot be empty`,
  }),
  phone: Joi.string().required().messages({
    "any.required": `"phone" is required`,
    "string.empty": `"phone" cannot be empty`,
  }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().messages({
    "string.empty": `"name" cannot be empty`,
  }),
  email: Joi.string().email().messages({
    "string.email": `"email" must be a valid email`,
    "string.empty": `"email" cannot be empty`,
  }),
  phone: Joi.string().messages({
    "string.empty": `"phone" cannot be empty`,
  }),
})
  .min(1)
  .messages({
    "object.min": "Body must have at least one field to update",
  });

export const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required().messages({
    "any.required": `"favorite" is required`,
  }),
});
