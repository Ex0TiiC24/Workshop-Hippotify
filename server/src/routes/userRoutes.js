import * as userControllers from '../controllers/userControllers.js'
import express from 'express'

const userRoute = express.Router()


userRoute.get("",userControllers.getUserId)

export default userRoute