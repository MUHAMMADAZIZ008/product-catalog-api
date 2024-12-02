import { Router } from 'express'
import { priceHistoryController } from '../controllers/index.js'
import { checkValidatons } from '../middlewares/index.js'
import { priceHistorySchema } from '../validations/index.js'

export const priceHistoryRouter = Router()

priceHistoryRouter.get('/', priceHistoryController.getAll)
priceHistoryRouter.get('/:id', priceHistoryController.getById)
priceHistoryRouter.get(
    '/product/:product_id',
    priceHistoryController.getByProductId,
)
priceHistoryRouter.get('/user/:user_id', priceHistoryController.getByUserId)
priceHistoryRouter.post(
    '/',
    checkValidatons(priceHistorySchema),
    priceHistoryController.create,
)
priceHistoryRouter.put('/:id', priceHistoryController.update)
priceHistoryRouter.delete('/:id', priceHistoryController.delete)
