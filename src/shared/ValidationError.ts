import { StatusCodes } from "http-status-codes"

export class ValidationError extends Error{
    errorCode: number
    constructor(msg:string | any){
        super(msg)
        this.errorCode = StatusCodes.BAD_REQUEST
    }
}