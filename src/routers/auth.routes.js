import { Router } from 'express'
import { authGuard, checkValidatons, roleGuard } from '../middlewares/index.js'
import { userSchema } from '../validations/index.js'
import {
    createdAdminContrloller1,
    forgetPasswordController,
    loginController,
    otpContrloller,
    registerContrloller,
    resetPasswordController,
} from '../controllers/index.js'
import { config } from '../configs/index.js'

export const authRouter = new Router()

authRouter.post('/register', checkValidatons(userSchema), registerContrloller)
authRouter.post('/verifyOtp', otpContrloller)
authRouter.post('/login', loginController)
//forget password
authRouter.post('/forgot-password', forgetPasswordController)
authRouter.post('/reset-password', resetPasswordController)

//admin create
const secret = config.token.access.secret
authRouter.post(
    '/create-admin',
    authGuard(secret),
    roleGuard(['admin', 'superAdmin']),
    checkValidatons(userSchema),
    createdAdminContrloller1,
)
