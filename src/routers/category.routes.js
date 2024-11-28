import { Router } from 'express'
import {
    createCategoryController,
    deleteCategoryController,
    getallCategoryController,
    getoneCategoryController,
    updateCategoryController,
} from '../controllers/category.controller.js'

export const categoryRouter = Router()

categoryRouter.get('/', getallCategoryController)
categoryRouter.get('/:id', getoneCategoryController)
categoryRouter.post('/', createCategoryController)
categoryRouter.put('/:id', updateCategoryController)
categoryRouter.delete('/:id', deleteCategoryController)
