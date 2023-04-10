import { PaginationOptions } from "./types";

export const getPaginationOptions = (query:any) : PaginationOptions => {
    return{
        limit: +query.limit && +query.limit<0 ? 25 : +query.limit,
        offset: isNaN(+query.offset) || +query.offset < 0 ? 0 : +query.offset
    }
}