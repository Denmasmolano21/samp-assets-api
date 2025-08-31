import { Router } from 'express'
import fs from 'fs'
import path from 'path'

const router = Router()
const dataDir = path.resolve('.')

const load = (file) =>
  JSON.parse(fs.readFileSync(path.join(dataDir, file), 'utf-8'))

const vehicles = load('vehicles/samp_vehicles.json')
const skins = load('skins/samp_skins.json')
const colors = load('colors/samp_colors.json')
const weapons = load('weapons/samp_weapons.json')

router.get('/', (req, res) =>
  res.json({
    message: 'SA:MP Assets API',
    endpoints: {
      vehicles: '/api/vehicles',
      skins: '/api/skins',
      weapons: '/api/weapons',
      colors: '/api/colors',
    },
  })
)

routes.get("/rmp", async (req, res) => {
	res.status(200).send({ message: "Revolution Multiplayer!" });
});

router.get('/vehicles', (req, res) => res.json(vehicles))
router.get('/vehicles/:id', (req, res) => {
  const item = vehicles.find((s) => s.id == req.params.id)
  if (!item) return res.status(404).json({ error: 'vehicles not found' })
  res.json(item)
})

router.get('/skins', (req, res) => res.json(skins))
router.get('/skins/:id', (req, res) => {
  const item = skins.find((s) => s.id == req.params.id)
  if (!item) return res.status(404).json({ error: 'skins not found' })
  res.json(item)
})

router.get('/colors', (req, res) => res.json(colors))
router.get('/colors/:id', (req, res) => {
  const item = colors.find((s) => s.id == req.params.id)
  if (!item) return res.status(404).json({ error: 'colors not found' })
  res.json(item)
})

router.get('/weapons', (req, res) => res.json(weapons))
router.get('/weapons/:id', (req, res) => {
  const item = weapons.find((s) => s.id == req.params.id)
  if (!item) return res.status(404).json({ error: 'weapons not found' })
  res.json(item)
})

export default router
