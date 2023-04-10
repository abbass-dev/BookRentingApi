import { OrderQuery, OrderStatus } from "./order-model"
import { PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()
import { UserSelector } from "../users/user-selectors"
import { OrderSelector } from "./order-selectos"
import { OrderResponse } from "./order-model"
import { BookSelector } from "../books/book-selectors"
import { StatusCodes } from "http-status-codes"

const getOrders =async (oderStatus:OrderStatus): Promise<OrderResponse[]>  => {
    var orders = await prisma.order.findMany({
        where:{
            status : oderStatus 
        }
        ,select:{ 
            ...OrderSelector,
            user:{select:UserSelector},
            books:{select:BookSelector}
        },
    })
    //if (orders.length>0)
     //   orders.forEach(order=>OrderStatus[order.status])
    return orders
}

export const getUserOrdersById =async (userId:string) :Promise<OrderQuery[]>=> {
    const userOrders = await prisma.order.findMany({
        where :{
            userId:userId
        },
        select:{
            ...OrderSelector,
            books:{select:BookSelector}
        }
    })
    return userOrders
}

export const getPendingOrders =async () => {
    return await getOrders(OrderStatus.PENDING)
}
export const getApprovedOrders =async () => {
   return await getOrders(OrderStatus.APPROVED)
}