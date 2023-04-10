import { Prisma, PrismaClient} from '@prisma/client'
import { getHashes } from 'crypto'
import { query } from 'express'

const prisma = new PrismaClient()
import {HttpException} from "../shared/HttpException"
import { PaginationOptions } from '../shared/types'
import { ValidationError } from '../shared/ValidationError'
import { BookCreateRequest, BookResponse, findBookQuery } from './book-model'

export const buildFindBookQuery = (query:findBookQuery) : Prisma.BookWhereInput=>{
    const queries = []
    if (query.author){
        queries.push({
            author:{
                equals:query.author
            }
        })
    }
    if (query.title){
        queries.push({
            title:{
                equals:query.title
            }
        })
    }
    return {
        AND:queries
    }
}

export const CreateBook = async (bookRequest:BookCreateRequest) : Promise<BookResponse>=> {
    const checkIsbnUniqness  = await prisma.book.findFirst({
        where:{
            isbn:bookRequest.isbn
        }
    })
    if (checkIsbnUniqness)
        throw new ValidationError('ISBN already exists')

    const quantity = bookRequest.quantity ? 10 :1
    const book = await prisma.book.create({
        data:{
            ...bookRequest,
            quantity
        }
    })
    return book
}

export const getManyBooks = async (
    query:findBookQuery,
    offset:number,
    limit:number
):Promise<Array<BookResponse>>=> {
    const whereQuery = buildFindBookQuery(query)
    const books = await prisma.book.findMany({
        where:whereQuery,
        skip:offset||0,
        take:limit||25
    })
    return books
}

export const getBooks =async (query:findBookQuery):Promise<Array<BookResponse>> =>  {
    const limit = Number(query.limit)
    const offset = Number(query.offset)
    const books = await getManyBooks(query,offset,limit)
    return books
}