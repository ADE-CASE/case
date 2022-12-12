import logger from './utils/logger'
import express from 'express'

import middlewares from './middlewares'
import routes from './routes'

const app = express()
const port = process.env.PORT

app.use(express.json())

app.use(middlewares)
app.use('/api/v1', routes)

app.listen(port, () => {
    logger.log('info', `server running on port: ${port}`, {
        environment: process.env.APP_ENV,
        status: 'OK'
    })
})