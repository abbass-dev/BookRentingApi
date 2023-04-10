import express, { NextFunction, Request, Response } from 'express'
import * as auth  from '../auth/auth-midllewear'
import { getBooksHandler } from './book-handlers'
const Router = express.Router()

Router.route('/books').get(getBooksHandler)

export default Router

