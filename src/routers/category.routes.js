import { Router } from "express";
import {} from '../controllers/index.js'
import { createCategoryController, deleteCategoryController, getallCategoryController, getoneCategoryController, updateCategoryController } from "../controllers/category.controller.js";

export const categoryRouter = Router()

categoryRouter.get('/all', getallCategoryController)
categoryRouter.get('/one/:id',getoneCategoryController )
categoryRouter.post('/add', createCategoryController )
categoryRouter.put('/update/:id', updateCategoryController )
categoryRouter.delete('/delete', deleteCategoryController)