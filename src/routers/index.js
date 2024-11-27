import { Router } from "express";
import { categoryRouter } from "./category.routes.js";
import { productRouter } from "./products.routes.js";
import { usersRouter } from "./users.routes.js";
import { cartsRouter } from "./carts.routes.js";


export const routers = new Router()


routers.use('/categorys', categoryRouter)
routers.use('/products', productRouter)
routers.use('/users', usersRouter)
routers.use('/carts', cartsRouter)
