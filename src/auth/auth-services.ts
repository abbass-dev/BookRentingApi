import { UserLoginRequest, UserResponseWithToken } from "../users/user-model";
import { findUserbyEmail } from "../users/user-services";
import { ValidationError } from "../shared/ValidationError";
import { verifyPassword } from "./utils/passwordHelper";
import { UserResponseWithTokenMapper } from "../users/user-mappers";

export const login = async(loginRequest:UserLoginRequest):Promise<UserResponseWithToken>=>{
    const {email,password} = loginRequest
    const user = await findUserbyEmail(email)
    if(!user)
        throw new ValidationError('Email is not registred')
        
    const password_check =await verifyPassword(password,user.password)
    if(!password_check)
        throw new ValidationError("Incorrect Password")
    return UserResponseWithTokenMapper(user)
}

