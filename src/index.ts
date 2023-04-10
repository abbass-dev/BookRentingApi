
import express, { Express, Request, Response } from 'express';
import { getApprovedOrders, getPendingOrders, getUserOrdersById } from './orders/order-services';
const App = express()
import UserRoutes from './users/user-routes'
import BookRoutes from './books/book-routes'
import { getUserOrderByUserId } from './users/user-services';

App.use(express.json())
App.use(UserRoutes)
App.use(BookRoutes)


App.listen(1338,async ()=>{
    const orders = await getUserOrderByUserId("f1924c33-96c4-42b5-855c-2274306aa80e")
    console.log(orders)
})