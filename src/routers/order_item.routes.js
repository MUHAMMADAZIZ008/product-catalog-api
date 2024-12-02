import express from 'express'
import { orderItemsController } from '../controllers/index.js'
import { authGuard, checkValidatons, roleGuard } from '../middlewares/index.js'
import { orderItemSchema } from '../validations/index.js'

export const order_itemRouter = express.Router()

order_itemRouter.get('/', orderItemsController.getAll)
order_itemRouter.get('/:id', orderItemsController.getById)
order_itemRouter.get('/order/:orderId', orderItemsController.getByOrderId)
order_itemRouter.post(
    '/',
    authGuard,
    roleGuard(['user', 'admin']),
    checkValidatons(orderItemSchema),
    orderItemsController.create,
)
order_itemRouter.put('/:id', authGuard, roleGuard(['user', 'admin']), orderItemsController.update)
order_itemRouter.delete('/:id', authGuard, roleGuard(['user', 'admin']), orderItemsController.delete)
