import { Router } from 'express'
import { checkValidatons } from '../middlewares/index.js'
import { userSchema } from '../validations/index.js'
import {
    forgetPasswordController,
    loginController,
    otpContrloller,
    registerContrloller,
} from '../controllers/index.js'

export const authRouter = new Router()

authRouter.post('/register', checkValidatons(userSchema), registerContrloller)
authRouter.post('/verifyOtp', otpContrloller)
authRouter.post('/login', loginController)

authRouter.post('/forgot-password', forgetPasswordController)
