
import validateProduct from "../validations/product.validation.js";

export const validateProductMiddleware = (req, res, next) => {
    const result = validateProduct(req.body);  

    if (!result.success) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: result.error.errors.map((err) => ({
                message: err.message,  
                path: err.path,        
                code: err.code        
            })),
        });
    }

    next();  
};
