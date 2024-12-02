import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'

import { routers } from './routers/index.js'
import { logger } from './utils/logger.js'

const app = express()

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100,
    message: 'Too many requests froim this IP address',
})

//third-party middlewares
app.use(express.json())
app.use(limiter)
app.use(morgan('dev'))
app.use(helmet())
app.use(cors())

//router
app.use('/api/v1', routers)

//error handle
app.use((err, req, res, next) => {
    logger.error(err.message)
    if (err) {
        return res.status(res.statusCode).send({
            success: false,
            message: err.message,
        })
    }

    return res.status(res.statusCode || 500).send({
        success: false,
        message: 'another error',
    })
})

//unhandlede rejection and uncaught exception lar
process.on('uncaughtException', (err) => {
    logger.error(err.message)
    process.exit(1)
})

process.on('unhandledRejection', (reason, promise) => {
    logger.error(`Unhandled rejection: ${reason}`)
    process.exit(1)
})

export default app
