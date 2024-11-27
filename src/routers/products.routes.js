import { Router } from "express";
import{} from '../controllers/index'
import { createProductController, deleteProductController, getallProductController, getoneProductController, updateProductController } from "../controllers/products.controller";

export const productRouter = Router()

productRouter.get('/all', getallProductController)
productRouter.get('/one/:id',getoneProductController )
productRouter.post('/add', createProductController )
productRouter.put('/update/:id', updateProductController )
productRouter.delete('/delete', deleteProductController)