
import http from 'http'
import app from './app.js'
import * as logger from './utils/logger.js'

const PORT = process.env.PORT || 3003

app.listen(PORT, '0.0.0.0', () =>
  console.log(`🚀 Server ready on port ${PORT}`)
)

if (process.env.NODE_ENV !== "production") {
	config();
}
const server = http.createServer(app);

server.listen(PORT, () => {
	logger.info(`Server listening at http://localhost:${PORT}`);
	logger.info(`Access the root route at http://localhost:${PORT}/hello`);
});