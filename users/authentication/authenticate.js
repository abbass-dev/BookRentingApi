import { verifyPassword } from "./password-utilities.js";
import ValidationError from "../../utils/ValidationError.js";
import { getUser } from "../user-services.js";

export async function VerifyUser(email,password){
    const user = await getUser(email)
    if (!user){
        err = {
            param : "email",
            msg   : "Email doesn't exsit" 
        }
        throw new ValidationError("database-validation-error",err)
    }
    const passwordMatch = await verifyPassword(password,user.password)
    if (!passwordMatch){
        throw new ValidationError("Incorrect Password")
    }
    return user
}
