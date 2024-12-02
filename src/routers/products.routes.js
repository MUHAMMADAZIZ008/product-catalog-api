import { Router } from 'express'
import {
    createProductController,
    deleteProductController,
    getallProductController,
    getoneProductController,
    updateProductController,
} from '../controllers/index.js'
import { checkValidatons } from '../middlewares/index.js'
import { productSchema } from '../validations/index.js'

export const productRouter = Router()

productRouter.get('/', getallProductController)
productRouter.get('/:id', getoneProductController)
productRouter.post('/', checkValidatons(productSchema), createProductController)
productRouter.put('/:id', updateProductController)
productRouter.delete('/:id', deleteProductController)
