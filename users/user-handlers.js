import { StatusCodes } from "http-status-codes";
import AppError from "../Error.js";
import { VerifyUser } from "./authentication/authenticate.js";
import { Sign } from "./authentication/jwt.js";
import { verifyPassword } from "./authentication/password-utilities.js";
import { CreateUser,getUserByID,updatePassword} from "./user-services.js";

export async function login(req,res,next){
    const {email,password} = req.body
    try{
        const user = await VerifyUser(email,password)
        const tokenFields = {id :user.id, name:user.name, isadmin : user.isAdmin}
        const token = await Sign(tokenFields)
        res.send(token)
    }
    catch(e){
       next(new AppError(e.message,StatusCodes.UNAUTHORIZED))
    }
}

export async function register(req,res,next){
    const {email,name,password} = req.body
    try{
       const user = await CreateUser({email:email,name:name,password:password,address:"fefe"})
       const tokenFields = {id :user.id, name:user.name, isadmin : user.isAdmin}
       const token = await Sign(tokenFields)
       res.send(token)
    }
    catch(e){

        next(new AppError(e.message,StatusCodes.NOT_ACCEPTABLE))
    }
}

export async function getCurrentUser(req,res,next){
    const {id} = req.user.id
    const user = await getUserByID(id)
    res.send(user)
}


export async function changePassword(req,res,next){
    const {id} = req.user
    const {oldpassword,newPassword} = req.body
    const user = await getUserByID(id)
    const {email} = user
    try{
        const isTrue = await VerifyUser(email,oldpassword)
        updatePassword(id,newPassword)
        res.status(StatusCodes.ACCEPTED).send('Password Changed')
    }
    catch(e){
        next(new AppError("Unautherized Access",StatusCodes.UNAUTHORIZED))
    }
}
