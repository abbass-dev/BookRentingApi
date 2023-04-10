import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { HttpException } from '../shared/HttpException';
import { UserCreateRequest ,UserLoginRequest,UserResponse,UserResponseWithToken} from './user-model';
import { createUser, findUserById, getUserOrderByUserId } from './user-services';
import * as auth from '../auth/auth-services'


export const createUserHandler = async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const user =await createUser(req.body)
        res.send(user)
    }
    catch(e){
        next(e)
    }
}

export const getCurrentUserHandler =async (req:Request,res:Response,next:NextFunction) => {
    try{
        const {id} = req.user
        if (!id)
            throw new HttpException(StatusCodes.BAD_REQUEST,"invalid Request")
        const userResponse:UserResponse|null = await findUserById(id)
        res.status(StatusCodes.ACCEPTED).send(userResponse)
    }
    catch(e){
        next(e)
    }
}


export const loginUserHandler =async (req:Request,res:Response,next:NextFunction) => {
    try{
        const userloginrequest: UserLoginRequest = req.body
        console.log(userloginrequest)
        if (!userloginrequest.email || !userloginrequest.password)
            throw new HttpException(StatusCodes.BAD_REQUEST,"Invalid email or password")
        const user = await auth.login(userloginrequest)
        res.status(StatusCodes.ACCEPTED).send(user)
    }
    catch(e){
        next(e)
    }
}

export const getCurrentUserOrdersHandler =async (req:Request,res:Response,next:NextFunction) => {
    try{
        const userId  = req.user.id
        const orders = await getUserOrderByUserId(userId)
        res.send(orders)
    }
    catch(e){
        next(e)
    }
}

export const getUserOrdersHandler =async (req:Request,res:Response,next:NextFunction) => {
    try{
        const userId = req.params.id
        const orders = await getUserOrderByUserId(userId)
        res.send(orders)
    } 
    catch(e){
        next(e)
    }
}

export const getUserHandler =async (req:Request,res:Response,next:NextFunction) => {
    try{
        const userId = req.params.id
        const user = await findUserById(userId)
        res.send(user)
    } 
    catch(e){
        next(e)
    }
}


