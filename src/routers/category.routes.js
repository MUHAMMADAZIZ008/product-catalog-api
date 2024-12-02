import { Router } from 'express'
import {
    createCategoryController,
    deleteCategoryController,
    getallCategoryController,
    getoneCategoryController,
    updateCategoryController,
} from '../controllers/category.controller.js'
import { checkValidatons } from '../middlewares/index.js'
import { categorySchema } from '../validations/index.js'

export const categoryRouter = Router()

categoryRouter.get('/', getallCategoryController)
categoryRouter.get('/:id', getoneCategoryController)
categoryRouter.post(
    '/',
    checkValidatons(categorySchema),
    createCategoryController,
)
categoryRouter.put('/:id', updateCategoryController)
categoryRouter.delete('/:id', deleteCategoryController)
