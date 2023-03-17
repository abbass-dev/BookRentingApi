import AppError from '../../Error.js'
import { Verify } from "./jwt.js"
export async function authenticate(req, res, next){
    const {token} = req.body
    try{
        const decoded = await Verify(token)
        req.user = decoded
        next()
    }
    catch(e){
        next(new AppError("Authentication Error",401))
    }
}