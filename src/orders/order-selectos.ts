import { Prisma } from "@prisma/client"

export const OrderSelector = Prisma.validator<Prisma.OrderSelect>()({
    id:true,
    status:true,
    requestDate:true
})

