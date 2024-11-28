import { validateCategory } from "../validations"


export const createCategory = (req,res,next) =>{
    const {error} = validateCategory(req.body)
    if(error){
        return res.status(400).json({
            success:false,
            message:"Validation failed",
            errors: error.details.map((err) => err.message),
        })
    }
    next()
}