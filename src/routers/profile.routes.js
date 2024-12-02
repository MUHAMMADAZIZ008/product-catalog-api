import { Router } from 'express'
import { profilesController } from '../controllers/index.js'
import { checkValidatons, authGuard, roleGuard } from '../middlewares/index.js'
import { profileSchema } from '../validations/index.js'

export const profileRouter = Router()

profileRouter.get('/', profilesController.getAll)
profileRouter.get('/:id', profilesController.getById)
profileRouter.get(
    '/user/:user_id',
    authGuard,
    roleGuard(['user', 'admin', 'manager']),
    profilesController.getByUserId,
)
profileRouter.post(
    '/',
    authGuard,
    roleGuard(['user', 'admin', 'manager']),
    checkValidatons(profileSchema),
    profilesController.create,
)
profileRouter.put('/:id', profilesController.update)
profileRouter.delete(
    '/:id',
    authGuard,
    roleGuard(['admin', 'manager']),
    profilesController.delete,
)
