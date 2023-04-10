import { type } from "os";
import { Order } from "../orders/order-model";

export interface User {
    id :string
    email: string
    name: string
    address :string
    isAdmin: boolean
    orders :Order[]
    password: string
    token:string
}
//Query : returned from database
//Response:
export type UserQuery = Pick<User,'id'|'email'|'name'|'address'|'isAdmin'|'password'>


//returned to user
export type UserTokenFields = Pick<User,'id'|'isAdmin'>
export type UserResponseWithToken = Pick<User,'email'|'name'|'address'|'token'>
export type UserResponse = Pick<User,'email'|'name'|'address'>
export type UserOrders = Pick<User,'email'|'name'|'address'|'orders'>

//
export type UserCreateRequest = Pick<User,'email'|'password'|'name'|'address'>
export type UserLoginRequest = Pick<User, 'email' | 'password'>;
export type UserUpdateRequest = Partial<Pick<User,'email'|'name'|'address'>>
