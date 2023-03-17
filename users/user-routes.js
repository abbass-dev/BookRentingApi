import { Router } from "express";
import * as userHandlers from './user-handlers.js'
import * as authentication  from "./authentication/authentication-middlewear.js";
import AppError from "../Error.js";
const route = Router()
import { loginValidation } from "./user-validation-schems.js";
import {validationResult} from 'express-validator'
import {validate} from '../utils/validator-middlewar.js'


//route.route('/login').post(userHandlers.login)
route.route('/register').post(userHandlers.register)
//route.route('/account').get(authentication.authenticate,userHandlers.getCurrentUser)
//route.route('/account/password').put(authentication.authenticate,userHandlers.changePassword)

async function test (req,res,next){
    const error =validationResult(req)
    res.send(req.body)
}

route.route('/test').get(
     validate(loginValidation),
        test
     )


route.route('/t').get((req,res,next)=>{
    next(new AppError('Unable to find /user/t'))
})


export default route



