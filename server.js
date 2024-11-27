import app from './src/app.js'
import { logger } from './src/utils/index.js'
import { config } from './src/configs/index.js'

const execute = async () => {
    try {
        app.listen(config.app.port, () => {
            logger.info(`jserver is runnig on port: ${config.app.port}`)
        })
    } catch (error) {
        logger.error(error.message)
    }
}

execute()
