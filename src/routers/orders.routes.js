import express from 'express'
import { ordersController } from '../controllers/index.js'
import { checkValidatons } from '../middlewares/index.js'
import { orderBodySchema } from '../validations/index.js'

export const orderRouter = express.Router()

orderRouter.get('/', ordersController.getAll)
orderRouter.get('/:id', ordersController.getById)
orderRouter.post('/', checkValidatons(orderBodySchema), ordersController.create)
orderRouter.put('/:id', ordersController.update)
orderRouter.delete('/:id', ordersController.delete)


