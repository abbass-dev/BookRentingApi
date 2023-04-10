import express, { NextFunction, Request, Response } from 'express'
import * as auth  from '../auth/auth-midllewear'
const Router = express.Router()
import {
    createUserHandler,
    getUserHandler,
    getCurrentUserHandler,
    getUserOrdersHandler,
    getCurrentUserOrdersHandler,
    loginUserHandler 
   } from './user-handlers'


Router.route('/users/register').post(createUserHandler)
Router.route('/users/login').get(loginUserHandler)


Router.route('/users/me').get(auth.Required,getCurrentUserHandler)
Router.route('/users/me/orders').get(auth.Required,getCurrentUserOrdersHandler)

Router.route('/users/:id').get(auth.isAdmin,getUserHandler)
Router.route('/users/:id/orders').get(auth.isAdmin,getUserOrdersHandler)

export default Router