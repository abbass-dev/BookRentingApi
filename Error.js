import {StatusCodes} from 'http-status-codes'
export default class AppError extends Error{
    constructor(message,statusCode=StatusCodes.INTERNAL_SERVER_ERROR,isOperational=true,stack=''){
        super(message)
        this.statusCode = statusCode
        this.isOperational = isOperational
        Error.captureStackTrace(this,this.constructor)
        console.log(this.stack)
        console.log(stack)
    }
}

