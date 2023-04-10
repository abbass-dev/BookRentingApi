import { Prisma } from "@prisma/client"


export const UserSelector = Prisma.validator<Prisma.UserSelect>()({
   email:true,
   name:true,
   address:true,
})
