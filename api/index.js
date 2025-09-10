import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import assetsRouter from './routes/assets.js';
import errorHandler from './utils/errorHandler.js';
import * as logger from './utils/logger.js';

const app = express();
const PORT = process.env.PORT || 3000;

// ===== Fix path untuk ES Module =====
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.join(__dirname, '../public'); // public ada di root

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

// Static files
app.use(express.static(publicPath));

// Root route → tampilkan index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Healthcheck
app.get('/healthcheck', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API routes
app.use('/api', assetsRouter);

// Error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server ready on port ${PORT}`);
  logger.info(`🚀 Server ready on port ${PORT}`);
});

