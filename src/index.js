
import http from 'http'
import app from './app.js'
import * as logger from './utils/logger.js'

const PORT = process.env.PORT || 3003

const server = http.createServer(app)

app.listen(PORT, '0.0.0.0', () =>
  console.log(`🚀 Server ready on port ${PORT}`)
)

server.listen(PORT, () => {
	logger.info(`Server listening at http://localhost:${PORT}`);
	logger.info(`Access the root route at http://localhost:${PORT}/hello`)
})