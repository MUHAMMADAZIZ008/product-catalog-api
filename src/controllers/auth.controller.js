import { authService } from "../services/index.js"
import { AppError, logger } from "../utils/index.js"

export const registerContrloller = async(req, res, next) =>{
    try {
        const body = req.body
        const newUser = await authService(body)
        
        if(!newUser.length){
            throw new AppError('somethig is error', 500)
        }
        res.status(200).send({
            message: 'Your otp has been sent to your email!'
        })
    } catch (error) {
        logger.error(error.message)
        next(error)
    }
}