import { productSchema } from '../validations/index.js'

export const validateProductMiddleware = (req, res, next) => {
    const result = validateProduct(req.body);  

    if (!result.success) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: error.details.map((err) => err.message),
        })
    }
    next()
}
