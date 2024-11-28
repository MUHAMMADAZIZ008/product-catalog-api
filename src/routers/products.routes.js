import { Router } from 'express'
import {
    createProductController,
    deleteProductController,
    getallProductController,
    getoneProductController,
    updateProductController,
} from '../controllers/index.js'

export const productRouter = Router()

productRouter.get('/', getallProductController)
productRouter.get('/:id', getoneProductController)
productRouter.post('/', createProductController)
productRouter.put('/:id', updateProductController)
productRouter.delete('/:id', deleteProductController)
