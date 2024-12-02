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

export const usersRouter = new Router()

usersRouter.post(
    '/',
    authGuard,
    roleGuard(['admin', 'manager']),
    checkValidatons(userSchema),
    createUserController,
)
usersRouter.get(
    '/',
    authGuard,
    roleGuard(['admin', 'manager']),
    getAllUserController,
)
usersRouter.get('/search', getBySearchUserController)
usersRouter.get(
    '/:id',
    authGuard,
    roleGuard(['admin', 'manager']),
    getByIdUserController,
)
usersRouter.put(
    '/:id',
    authGuard,
    roleGuard(['admin', 'manager']),
    updateUserController,
)
usersRouter.delete(
    '/:id',
    authGuard,
    roleGuard(['admin', 'manager']),
    deleteUserController,
)
