import { Router } from "express";
import { createProductController, deleteProductController, getallProductController, getoneProductController, updateProductController } from "../controllers/index.js";

export const productRouter = Router()

productRouter.get('/all', getallProductController)
productRouter.get('/one/:id',getoneProductController )
productRouter.post('/add', createProductController )
productRouter.put('/update/:id', updateProductController )
productRouter.delete('/delete', deleteProductController)