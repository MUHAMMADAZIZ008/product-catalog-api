import { Router } from 'express'
import {
    createUserController,
    deleteUserController,
    getAllUserController,
    getByIdUserController,
    getBySearchUserController,
    updateUserController,
} from '../controllers/index.js'
import { userSchema } from '../validations/index.js'
import { authGuard, checkValidatons, roleGuard } from '../middlewares/index.js'
import { config } from '../configs/index.js'

export const usersRouter = new Router()
const secret = config.token.access.secret

usersRouter.post(
    '/',
    authGuard(secret),
    roleGuard(['admin', 'manager']),
    checkValidatons(userSchema),
    createUserController,
)
usersRouter.get(
    '/',
    authGuard(secret),
    roleGuard(['admin', 'manager']),
    getAllUserController,
)
usersRouter.get('/search', getBySearchUserController)
usersRouter.get(
    '/:id',
    authGuard(secret),
    roleGuard(['admin', 'manager']),
    getByIdUserController,
)
usersRouter.put(
    '/:id',
    authGuard(secret),
    roleGuard(['admin', 'manager']),
    updateUserController,
)
usersRouter.delete(
    '/:id',
    authGuard(secret),
    roleGuard(['admin', 'manager']),
    deleteUserController,
)
