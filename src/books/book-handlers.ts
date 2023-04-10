import { prisma } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { PaginationOptions } from "../shared/types";
import { getPaginationOptions } from "../shared/utility";
import { getAllBooks } from "./book-services";

export const getBooksHandler =async (req:Request,res:Response,next:NextFunction) => {
    const paginationOption  = getPaginationOptions(req.query)
    console.log(paginationOption)
    const books = await getAllBooks(paginationOption)
    res.send(books)  
}