import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name must consist of at least {#limit} letters ',
    'string.max': 'Name must consist of a maximum of {#limit} letters',
    'any.required': 'Name is required before entering',
  }),
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Phone number must be a string',
    'string.min': 'Phone number must have at least {#limit} digits',
    'string.max': 'Phone number must have no more than {#limit} digits',
    'any.required': 'Phone number is required',
  }),
  email: Joi.string().email().min(3).max(20).required().messages({
    'string.base': 'Email should be a string',
    'string.email': 'Email must be a valid email address',
    'string.min': 'Email must have a least {#limit} characters',
    'string.max': 'Email must have no more than {#limit} characters',
    'any.required': 'Email is required',
  }),
  isFavorite: Joi.boolean().default(false).messages({
    'boolean.base': 'isFavorite must be true or false',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'string.base': 'Contact type must be a string',
    'any.only': 'Contact type must be one of: work, home, personal',
  }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Name should be a string',
    'string.min': 'Name must consist of at least {#limit} letters ',
    'string.max': 'Name must consist of a maximum of {#limit} letters',
  }),
  phoneNumber: Joi.string().min(3).max(20).messages({
    'string.base': 'Phone number must be a string',
    'string.min': 'Phone number must have at least {#limit} digits',
    'string.max': 'Phone number must have no more than {#limit} digits',
  }),
  email: Joi.string().email().min(3).max(20).messages({
    'string.base': 'Email should be a string',
    'string.email': 'Email must be a valid email address',
    'string.min': 'Email must have a least {#limit} characters',
    'string.max': 'Email must have no more than {#limit} characters',
  }),
  isFavorite: Joi.boolean().default(false).messages({
    'boolean.base': 'isFavorite must be true or false',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'string.base': 'Contact type must be a string',
    'any.only': 'Contact type must be one of: work, home, personal',
  }),
});
