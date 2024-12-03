import {
    authService,
    createUserService,
    daleteUserService,
    forgetPasswordService,
    loginUserService,
    otpService,
    resetPasswordService,
} from '../services/index.js'
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
        return res.status(200).send({
            message: 'link is sent to your email',
        })
    } catch (error) {
        logger.error(error.message)
        next(error)
    }
}
export const resetPasswordController = (req, res, next) => {
    try {
        const { token } = req.query
        const { password } = req.body
        const updatedPassword = resetPasswordService(token, password)
        return res.status(200).send({
            message: 'succes',
            updatedPassword,
        })
    } catch (error) {
        logger.error(error.message)
        next(error)
    }
}

export const createdAdminController = async (req, res, next) => {
    try {
        const body = req.body
        const newUser = await createUserService(body)
        res.status(200).send({
            message: 'created',
            data: newUser[0].id,
        })
    } catch (error) {
        logger.error(error.message)
        next(error)
    }
}

export const deleteAdminController = async (req, res, next) => {
    try {
        const id = req.params.id
        const data = await daleteUserService(id)
        return res.status(200).send({
            message: 'deleted',
            data: data[0].id,
        })
    } catch (error) {
        logger.error(error.message)
        next(error)
    }
}
