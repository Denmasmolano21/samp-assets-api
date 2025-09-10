// import express from 'express'
// import cors from 'cors'
// import morgan from 'morgan'
// import path from 'path'
// import assetsRouter from './routes/assets.js'
// import errorHandler from './utils/errorHandler.js'
// import * as logger from './utils/logger.js'
// 
// const app = express()
// const PORT = process.env.PORT || 3000
// 
// // Middleware
// app.use(cors())
// app.use(express.json())
// app.use(morgan('tiny'))
// 
// // Static files
// app.use(express.static(path.resolve('.', 'public')))
// app.use('../public/vehicles/samp_vehicles_images', express.static(path.resolve('.', 'vehicles/samp_vehicles_images')))
// app.use('../public/skins/samp_skins_images', express.static(path.resolve('.', 'skins/samp_skins_images')))
// app.use('../public/weapons/samp_weapons_images', express.static(path.resolve('.', 'weapons/samp_weapons_images')))
// app.use('../public/colors/samp_colors_images', express.static(path.resolve('.', 'colors/samp_colors_images')))
// 
// // Routes
// app.get('/', (req, res) => res.json({ status: 'ok' }))
// app.get('/healthcheck', (req, res) => {
//   res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
// });
// app.use('/api', assetsRouter)
// 
// // Error handling
// app.use(errorHandler)
// 
// // Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Server ready on port ${PORT}`)
//   logger.info(`🚀 Server ready on port ${PORT}`)
// })
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import assetsRouter from './routes/assets.js';
import errorHandler from './utils/errorHandler.js';
import * as logger from './utils/logger.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

// API Routes
app.use('/api', assetsRouter);

// Error handling middleware
app.use(errorHandler);

// Logging server start (optional, hanya untuk dev lokal)
logger.info('🚀 Express app configured for Vercel deployment');

export default app;
