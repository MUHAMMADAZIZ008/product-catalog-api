import express from 'express'
import { ordersController } from '../controllers/index.js'
import { authGuard, checkValidatons, roleGuard } from '../middlewares/index.js'
import { orderBodySchema } from '../validations/index.js'

export const orderRouter = express.Router()

orderRouter.get('/', ordersController.getAll)
orderRouter.get('/:id', authGuard, roleGuard('user', 'admin'),ordersController.getById)
orderRouter.post('/', authGuard, roleGuard(['user', 'admin']), checkValidatons(orderBodySchema), ordersController.create)
orderRouter.put('/:id',authGuard, roleGuard(['user', 'admin']), ordersController.update)
orderRouter.delete('/:id', authGuard, roleGuard(['user', 'admin']), ordersController.delete)
