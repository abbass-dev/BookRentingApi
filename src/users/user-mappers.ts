import {UserTokenFields,UserQuery, UserResponseWithToken, UserResponse} from "./user-model";
import { Sign } from "../auth/utils/jwt";
//mapper used to generate Response with token
export const UserResponseWithTokenMapper = (user:UserQuery): UserResponseWithToken => ({
    email: user.email,
    name :user.name,
    address:user.address,
    token:Sign({id:user.id,isAdmin:user.isAdmin})
});

export const UserResponseMapper = (user:UserQuery): UserResponse => ({
    email: user.email,
    name :user.name,
    address:user.address,
});
