import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import assetsRouter from './routes/assets.js'
import errorHandler from './utils/errorHandler.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

// Static file serving
import path from 'path'
app.use(express.static(path.resolve('.', 'public')))
app.use('/vehicles/samp_vehicles_images', express.static(path.resolve('.', 'vehicles/samp_vehicles_images')))
app.use('/skins/samp_skins_images', express.static(path.resolve('.', 'skins/samp_skins_images')))
app.use('/weapons/samp_weapons_images', express.static(path.resolve('.', 'weapons/samp_weapons_images')))
app.use('/colors/samp_colors_images', express.static(path.resolve('.', 'colors/samp_colors_images')))

// Healthcheck & root
app.get('/', (req, res) => res.json({ status: 'ok' }))

// API routes
app.use('/api', assetsRouter)

// Error handling (404 + internal)
app.use(errorHandler)

export default app
