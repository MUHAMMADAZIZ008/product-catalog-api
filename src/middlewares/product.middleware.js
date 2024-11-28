import {validateProduct} from "../validations/index"

export const validateProductMiddleware = (req, res, next) => {
    const { error } = validateProduct(req.body)
    if (error) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: error.details.map((err) => err.message),
        })
    }
    next()
}