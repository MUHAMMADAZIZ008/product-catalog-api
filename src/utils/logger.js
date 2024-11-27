import { createLogger, transports, format } from "winston";

const { combine, timestamp, printf } = format;


const logFormat = printf(({ level, message, timestamp: timestamp }) => {
    return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
  });

export const logger = createLogger({
    level: 'silly',
    format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        logFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'app.log' }) 
    ]
})