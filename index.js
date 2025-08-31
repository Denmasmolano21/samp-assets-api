import express from 'express'
import fs from 'fs'

const app = express()

// Load data JSON
const skins = JSON.parse(fs.readFileSync('skins/samp_skins.json'))
const vehicles = JSON.parse(fs.readFileSync('vehicles/samp_vehicles.json'))
const weapons = JSON.parse(fs.readFileSync('weapons/samp_weapons.json'))
const colors = JSON.parse(fs.readFileSync('colors/samp_colors.json'))

function registerRoute(name, data) {
  app.get(`/api/${name}`, (req, res) => {
    res.json(data)
  })

  app.get(`/api/${name}/:id`, (req, res) => {
    const item = data.find((d) => d.id == req.params.id)
    if (!item) {
      return res.status(404).json({ error: `${name} not found` })
    }
    res.json(item)
  })
}

// ✅ Index route
app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to SA:MP Assets API 🚀',
    endpoints: {
      skins: '/api/skins',
      vehicles: '/api/vehicles',
      weapons: '/api/weapons',
      colors: '/api/colors',
    },
  })
})

registerRoute('skins', skins)
registerRoute('vehicles', vehicles)
registerRoute('weapons', weapons)
registerRoute('colors', colors)

// ✅ Gunakan PORT dari Railway
const PORT = process.env.PORT || 3000
app.listen(PORT, '0.0.0.0', () => {
  console.log(`API ready at http://0.0.0.0:${PORT}`)
})
