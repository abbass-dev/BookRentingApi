import { PrismaClient } from '@prisma/client'
import ValidationError from '../utils/ValidationError.js'
const prisma = new PrismaClient()
import { encryptPassword } from './authentication/password-utilities.js'

export async function CreateUser({email,name,address,isAdmin=false,password}){
    const hashedPassword = await encryptPassword(password)
    try{
        const user = await prisma.user.create({
        data:{
            email,
            name,
            address,
            isAdmin,
            password :hashedPassword
        }})
        return user
    }
    catch(e){
        if (e.code =="P2002"){
            const err = {
                parms: e.meta.target[0],
                msg: 'Email Already Exists'
            }
            throw new ValidationError('database-validation-error',err)
        }
        throw e
    }
}

export async function getUser(email){
    const user = await prisma.user.findFirst({
        where:{
            email
        }
    })
    return user
}

export async function getUserByID(id){
    try{
        const user = await prisma.user.findFirst({
            where:{
                id
            }
        })
        delete user.password //exclude user password
        return user
    }
    catch(e){
        throw new Error(e.message)
    }
}

export async function updatePassword(id,newPassword){
    const hashedPassword = await encryptPassword(newPassword)
    try{
        const user  = await prisma.user.update({
            where:{
                id
            },
            data:{
                password:hashedPassword
        }
    })}
    catch(e){
        if (e instanceof PrismaClientKnownRequestError )
            throw new Error(e.message)
        else 
            throw(e)
    }
}
