import { Prisma } from "@prisma/client"

export const BookSelector = Prisma.validator<Prisma.BookSelect>()({
   isbn:true,
   title:true,
   author:true,
   quantity:true,
})
