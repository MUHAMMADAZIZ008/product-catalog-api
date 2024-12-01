import express from 'express'
import { paymentsController } from '../controllers/index.js'
import { checkValidatons } from '../middlewares/index.js'
import { paymentBodySchema } from '../validations/index.js'

export const paymentsRouter = express.Router()

paymentsRouter.get('/',paymentsController.getAll)
paymentsRouter.get('/:id',paymentsController.getById)
paymentsRouter.post('/',checkValidatons(paymentBodySchema), paymentsController.create)
paymentsRouter.put('/:id',paymentsController.update)
paymentsRouter.delete('/:id', paymentsController.delete)

