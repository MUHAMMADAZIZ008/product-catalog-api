import express from 'express'
import { paymentsController } from '../controllers/index.js'
import { authGuard, checkValidatons, roleGuard } from '../middlewares/index.js'
import { paymentBodySchema } from '../validations/index.js'

export const paymentsRouter = express.Router()

paymentsRouter.get('/', paymentsController.getAll)
paymentsRouter.get('/:id', paymentsController.getById)
paymentsRouter.post(
    '/',
    authGuard,
    roleGuard(['admin']),
    checkValidatons(paymentBodySchema),
    paymentsController.create,
)
paymentsRouter.put(
    '/:id',
    authGuard,
    roleGuard(['admin']),
    paymentsController.update,
)
paymentsRouter.delete('/:id', paymentsController.delete)
