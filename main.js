import express from 'express';
const app = express()
import bodyParser from 'body-parser'
import userRoutes from './users/user-routes.js'
import errorHandle from './Error-middlewear.js'

app.use(bodyParser.json())
app.use('/user',userRoutes)
app.use(errorHandle)
app.listen('1338',async()=>{
    console.log('listinning')
}
)
