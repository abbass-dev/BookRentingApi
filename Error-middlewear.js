import { error } from "console";
import { StatusCodes } from "http-status-codes";
import AppError from "./Error.js";
import ValidationError from "./utils/ValidationError.js";

export default function handleError(err,req,res,next){
   if (err instanceof ValidationError){
      handleValidationError(err,res)
   }
   else if (err instanceof AppError){
         return res.status(err.statusCode).send(err.message)
   } 
   else{
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("INTERNAL SERVER ERROR")
   }
}

function handleValidationError(err,res){
   return res.status(StatusCodes.BAD_REQUEST).send(err.Errors)
}