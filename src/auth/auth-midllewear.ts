import { NextFunction, Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import { HttpException } from "../shared/HttpException"
import { Verify } from "./utils/jwt"


export const Required = async (req:Request,res:Response,next:NextFunction)=>{
    const token = req.body.token
    if (!token)
        throw new HttpException(StatusCodes.BAD_REQUEST,"Invalid requrest")
   try{
        const user = await Verify(token)
        if (!user)
            throw new HttpException(StatusCodes.FORBIDDEN,"unauthorized requrest")
        req.user = user
        next()
    }
    catch(e){
        next(e)
    }
}

export const isAdmin =async (req:Request,res:Response,next:NextFunction)=>{
    const token = req.body.token
    if (!token)
        throw new HttpException(StatusCodes.BAD_REQUEST,"Invalid requrest")
    try{
        const user = await Verify(token)
        if (!user || !user.isAdmin)
            throw new HttpException(StatusCodes.FORBIDDEN,"unauthorized requrest")
        req.user = user
        next()
    }
    catch(e){
        next(e)
    }
}