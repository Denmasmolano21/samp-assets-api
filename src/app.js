import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import assetsRouter from './routes/assets.js'
import errorHandler from './utils/errorHandler.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

// Healthcheck & root
app.get('/', (req, res) => res.json({ status: 'ok' }))

// API routes
app.use('/api', assetsRouter)

// Error handling (404 + internal)
app.use(errorHandler)

export default app
