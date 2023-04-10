import { PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()
import {HttpException} from "../shared/HttpException"
import { encryptPassword } from '../auth/utils/passwordHelper'
import { UserResponseMapper, UserResponseWithTokenMapper } from './user-mappers'
import {
    UserCreateRequest,
    UserResponseWithToken,
     User,
     UserQuery,
     UserUpdateRequest,
     UserResponse
    } from "./user-model"
import { StatusCodes } from 'http-status-codes'
import { getUserOrdersById } from '../orders/order-services'


export const createUser = async (inputData:UserCreateRequest):Promise<UserResponseWithToken>=>{
    const {email,address,password,name} = inputData
    //Check if email already registerd
    const emailExists = await prisma.user.findFirst({
        where:{email}
    })
    if (emailExists){
        throw new HttpException(400,{errors:['Email already Exists']})
    }
    const hashedPassword = await encryptPassword(password)
    //Create user
    const user = await prisma.user.create({
        data:{
            email,
            name,
            address,
            isAdmin:false,
            password:hashedPassword
        }
    })
    return UserResponseWithTokenMapper(user)
}


export const findUserbyEmail = async(email:string):Promise<UserQuery|null>=>{
    const user = await prisma.user.findUnique({
        where:{email}
    })
    return user
}

export const findUserById = async(id:string):Promise<UserResponse|null>=>{
    console.log(id)
    const user = await prisma.user.findUnique({
        where:{id}
    })
    console.log(user)
    if (!user)//change error message
        throw new Error("INTERNAL ERROR , User has been deleted")
    return UserResponseMapper(user)
}

export const updateUser =async (userID:string,updateRequest:UserUpdateRequest): Promise<UserResponseWithToken> => {
    try{
        const user = await prisma.user.update({
            where:{
                id:userID
            },
            data:{
                ...updateRequest
            }
        })
        return UserResponseWithTokenMapper(user)
    }
    catch(e){
        throw new HttpException(StatusCodes.NOT_FOUND,'No such user')
    }    
}
export const getUserOrderByUserId =async (userId:string) => {
    const orders = await getUserOrdersById(userId)
    return orders
}