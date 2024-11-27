import express from 'express'
import { routers } from './routers/index.js'
import { logger } from './utils/logger.js'

const app = express()

app.use(express.json())

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

process.on('uncaughtException', (err) => {
    logger.error(err.message)
    process.exit(1)
})

export default app
