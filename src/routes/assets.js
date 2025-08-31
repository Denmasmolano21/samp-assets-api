import { Router } from 'express'
import fs from 'fs'
import path from 'path'

const router = Router()
const dataDir = path.resolve('.')

const load = (file) =>
  JSON.parse(fs.readFileSync(path.join(dataDir, file), 'utf-8'))

const skins = load('skins/samp_skins.json')
const vehicles = load('vehicles/samp_vehicles.json')
// Tambahkan weapons dan colors sama

router.get('/', (req, res) =>
  res.json({
    message: 'SA:MP Assets API',
    endpoints: {
      skins: '/api/skins',
      vehicles: '/api/vehicles',
      // dll.
    },
  })
)

router.get('/skins', (req, res) => res.json(skins))
router.get('/skins/:id', (req, res) => {
  const item = skins.find((s) => s.id == req.params.id)
  if (!item) return res.status(404).json({ error: 'skins not found' })
  res.json(item)
})

// Sama untuk vehicles, weapons, colors...

export default router
