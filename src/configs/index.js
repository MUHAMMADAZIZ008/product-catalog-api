import app from './app.js'
import db from './db.js'

export const config = {
    ...db,
    ...app,
}
