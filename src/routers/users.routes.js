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
import { checkValidatons } from '../middlewares/index.js'

export const usersRouter = new Router()

usersRouter.post('/',checkValidatons(userSchema), createUserController)
usersRouter.get('/', getAllUserController)
usersRouter.get('/search', getBySearchUserController)
usersRouter.get('/:id', getByIdUserController)
usersRouter.put('/:id', updateUserController)
usersRouter.delete('/:id', deleteUserController)
