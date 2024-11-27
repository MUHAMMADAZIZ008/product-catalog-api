import { Router } from 'express'
import { createCartController, deleteCartController, getAllCartController, getByIdCartController, updateCartController } from '../controllers/index.js'
import { cartSchema } from '../validations/index.js'
import { checkValidatons } from '../middlewares/index.js'

export const cartsRouter = new Router()

cartsRouter.post('/', checkValidatons(cartSchema),createCartController)
cartsRouter.get('/', getAllCartController)
cartsRouter.get('/:id', getByIdCartController)
cartsRouter.put('/:id', updateCartController)
cartsRouter.delete('/:id', deleteCartController)
