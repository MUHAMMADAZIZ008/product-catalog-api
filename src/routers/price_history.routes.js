import { Router } from 'express'
import { priceHistoryController } from '../controllers/index.js'
import { checkValidatons,authGuard, roleGuard } from '../middlewares/index.js'
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
    authGuard, roleGuard(['admin','manager']), 
    checkValidatons(priceHistorySchema),
    priceHistoryController.create,
)
priceHistoryRouter.put('/:id',authGuard, roleGuard(['admin','manager']),  priceHistoryController.update)
priceHistoryRouter.delete('/:id',authGuard, roleGuard(['admin','manager']),  priceHistoryController.delete)
