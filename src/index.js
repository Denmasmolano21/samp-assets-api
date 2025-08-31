import app from './app.js'
import * as logger from './utils/logger.js'

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`🚀 Server ready on port ${PORT}`)
  logger.info(`🚀 Server ready on port ${PORT}`)
})
