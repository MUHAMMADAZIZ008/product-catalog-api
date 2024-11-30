import { Router } from 'express'
import { checkValidatons } from '../middlewares/index.js'
import { userSchema } from '../validations/index.js'
import { loginController, otpContrloller, registerContrloller } from '../controllers/index.js'

export const authRouter = new Router()

authRouter.post('/register', checkValidatons(userSchema), registerContrloller)
authRouter.post('/verifyOtp', otpContrloller)
authRouter.post('/login', loginController)
