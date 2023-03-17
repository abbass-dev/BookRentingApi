import jsonwebtoken from 'jsonwebtoken';
const secret = "fwewerg34tbrwrebwergewrgwer1b"

export async function Sign(payload){
    try{
        const token  =  await jsonwebtoken.sign(payload,secret);
        return token
    }
    catch(e){
        throw e
    }
}
export async function Verify(token){
        const data  =  await jsonwebtoken.verify(token,secret);
        if (!data)
            throw new Error('Invalid token')
        return data
}
