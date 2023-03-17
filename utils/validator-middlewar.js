import { validationResult } from 'express-validator';
import  ValidationError  from '../utils/ValidationError.js'
export const validate = validations => {

  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));
    const errors = validationResult(req)

    if (errors.isEmpty()) {
      return next();
    }

    return next(new ValidationError('request-validation-error',errors.array()));
  };
};
