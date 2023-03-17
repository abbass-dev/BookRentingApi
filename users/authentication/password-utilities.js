import bcrypt from 'bcrypt'
import ValidationError from '../../utils/ValidationError.js';
const saltRounds = 10;

export async function encryptPassword(plainPassword){
    try{
        const salt = await bcrypt.genSalt(saltRounds)
        const hashedPassword =  await bcrypt.hash(plainPassword,salt)
        return hashedPassword
    }
    catch(e){
        throw new Error(e)
    }
}

export async function verifyPassword(plainPassword,hashedPassword){
    try{
        const isMatch = await bcrypt.compare(plainPassword,hashedPassword)
        return isMatch   
    }
    catch(e){
        err = {
            parm:'password',
            err :'Incorrect password'
        }
        throw new ValidationError('Password-verfication-error')
    }
}