import { createLogger, transports, format } from 'winston'
import { Logtail } from '@logtail/node'
import { LogtailTransport } from '@logtail/winston'
import { config } from 'dotenv'
config()

const { combine, timestamp, printf } = format

const logtail = new Logtail(process.env.LOGGER_TOKEN)

const logFormat = printf(({ level, message, timestamp: timestamp }) => {
    return `[${timestamp}] ${level.toUpperCase()}: ${message}`
})

export const logger = createLogger({
    level: 'silly',
    format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), logFormat),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'app.log' }),
        new LogtailTransport(logtail),
    ],
})
