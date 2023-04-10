import bcrypt from 'bcrypt'
import { HttpException } from '../../shared/HttpException';
import { StatusCodes } from 'http-status-codes';
import { ValidationError } from '../../shared/ValidationError';
const saltRounds = 10;//todo read from config


export async function encryptPassword(plainPassword:string):Promise<string>{
    try{
        const salt = await bcrypt.genSalt(saltRounds)
        const hashedPassword =  await bcrypt.hash(plainPassword,salt)
        return hashedPassword
    }
    catch(e){
        //logger
        throw new HttpException(StatusCodes.INTERNAL_SERVER_ERROR,"internal server error")
    }
}

export async function verifyPassword(plainPassword:string, hashedPassword:string):Promise<boolean>{
    try{
        const isMatch = await bcrypt.compare(plainPassword,hashedPassword)
        return isMatch   
    }
    catch(e){
        throw new ValidationError('Incorrect Password')
    }
}