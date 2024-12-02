import { Router } from 'express'
import {
    createProductController,
    deleteProductController,
    getallProductController,
    getoneProductController,
    updateProductController,
} from '../controllers/index.js'
import { checkValidatons,authGuard,roleGuard } from '../middlewares/index.js'
import { productSchema } from '../validations/index.js'

export const productRouter = Router()

productRouter.get('/', getallProductController)
productRouter.get('/:id', getoneProductController)
productRouter.post('/',authGuard, roleGuard(['admin','manager']),  checkValidatons(productSchema), createProductController)
productRouter.put('/:id',authGuard, roleGuard(['admin','manager']),  updateProductController)
productRouter.delete('/:id',authGuard, roleGuard(['admin','manager']),  deleteProductController)
