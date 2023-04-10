export class HttpException extends Error{
    errorCode: number
    constructor(errorCode:number,msg:string | any){
        super(msg)
        this.errorCode = errorCode
    }
}