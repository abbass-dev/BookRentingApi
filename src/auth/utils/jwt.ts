import { UserTokenFields } from '../../users/user-model';
const secret = "fwewerg34tbrwrebwergewrgwer1b" //read congfig
import JWT from 'jsonwebtoken';
import { HttpException } from '../../shared/HttpException';
import { StatusCodes } from 'http-status-codes';


export function Sign(payload:UserTokenFields){
    try{
        const token  =  JWT.sign(payload,secret);
        return token
    }
    catch(e){
        throw e
    }
}
export async function Verify(token:string): Promise<UserTokenFields>{
        try{            
            var user = JWT.verify(token,secret) as UserTokenFields
            if (!user)
                throw new Error('Invalid token')
        }
        catch(e){
            console.error(e)
            throw new HttpException(StatusCodes.BAD_REQUEST,"Invalid Token")
        }
        return user
}
