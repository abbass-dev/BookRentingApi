import { check, checkSchema, oneOf } from "express-validator";

const loginSchema = [
    oneOf([
        check('email').isEmail().bail().normalizeEmail({gmail_remove_dots:true}).withMessage('Invalid Email'),
        check('password').exists().withMessage('Invalid Password')
    ]),
    check('email').isEmail()
]

export const loginValidation = loginSchema
