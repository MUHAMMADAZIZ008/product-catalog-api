import { Router } from 'express'
import { profilesController } from '../controllers/index.js'
import { checkValidatons } from '../middlewares/index.js'
import { profileSchema } from '../validations/index.js'

export const profileRouter = Router()

profileRouter.get('/', profilesController.getAll)
profileRouter.get('/:id', profilesController.getById)
profileRouter.get('/user/:user_id', profilesController.getByUserId)
profileRouter.post('/', checkValidatons(profileSchema), profilesController.create)
profileRouter.put('/:id', profilesController.update)
profileRouter.delete('/:id', profilesController.delete)
