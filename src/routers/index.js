import { Router } from 'express'
import { categoryRouter } from './category.routes.js'
import { productRouter } from './products.routes.js'
import { usersRouter } from './users.routes.js'
import { cartsRouter } from './carts.routes.js'
import { reviewRouter } from './rewiews.routes.js'
import { authRouter } from './auth.routes.js'

export const routers = new Router()
routers.use('/auth', authRouter)
routers.use('/categorys', categoryRouter)
routers.use('/products', productRouter)
routers.use('/users', usersRouter)
routers.use('/carts', cartsRouter)
routers.use('/rewiew', reviewRouter)
