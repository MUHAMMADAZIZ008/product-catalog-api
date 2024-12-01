import { authService, loginUserService, otpService } from '../services/index.js'
import { logger } from '../utils/index.js'

export const registerContrloller = async (req, res, next) => {
    try {
        const body = req.body
        const newUser = await authService(body)

        res.status(200).send({
            message: 'Your otp has been sent to your email!',
        })
    } catch (error) {
        logger.error(error.message)
        next(error)
    }
}
export const otpContrloller = async (req, res, next) => {
    try {
        const body = req.body
        const otp = await otpService(body)

        return res.status(200).send({
            message: 'succes',
            user_active: otp,
        })
    } catch (error) {
        logger.error(error.message)
        next(error)
    }
}

export const loginController = async (req, res, next) => {
    try {
        const body = req.body
        const signInUser = await loginUserService(body)
        return res.status(200).send({
            message: 'succes',
            token: signInUser,
        })
    } catch (error) {
        logger.error(error.message)
        next(error)
    }
}

export const forgetPasswordController = async (req, res, next) => {
    try {
        const { email } = req.body
        const returResult = forgetPasswordService(email)
    } catch (error) {
        logger.error(error.message)
        next(error)
    }
}
