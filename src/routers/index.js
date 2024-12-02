import { Router } from 'express'
import { categoryRouter } from './category.routes.js'
import { productRouter } from './products.routes.js'
import { usersRouter } from './users.routes.js'
import { cartsRouter } from './carts.routes.js'
import { reviewRouter } from './reviews.routes.js'
import { authRouter } from './auth.routes.js'
import { order_itemRouter } from './order_item.routes.js'
import { orderRouter } from './orders.routes.js'
import { paymentsRouter } from './payments.routes.js'
import { profileRouter } from './profile.routes.js'
import { priceHistoryRouter } from './price_history.routes.js'

export const routers = new Router()
routers.use('/auth', authRouter)
routers.use('/categorys', categoryRouter)
routers.use('/products', productRouter)
routers.use('/users', usersRouter)
routers.use('/carts', cartsRouter)
routers.use('/rewiew', reviewRouter)
routers.use('/orderItem', order_itemRouter)
routers.use('/orders', orderRouter)
routers.use('/payments', paymentsRouter)
routers.use('/profile', profileRouter)
routers.use('/pricehistory', priceHistoryRouter)
