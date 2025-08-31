import Fastify from "fastify";
import fs from "fs";

const app = Fastify();

// Load data JSON
const skins = JSON.parse(fs.readFileSync("skins/samp_skins.json"));
const vehicles = JSON.parse(fs.readFileSync("vehicles/samp_vehicles.json"));
const weapons = JSON.parse(fs.readFileSync("weapons/samp_weapons.json"));
const colors = JSON.parse(fs.readFileSync("colors/samp_colors.json"));

function registerRoute(name, data) {
  app.get(`/api/${name}`, async () => data);
  app.get(`/api/${name}/:id`, async (req, reply) => {
    const item = data.find(d => d.id == req.params.id);
    if (!item) return reply.code(404).send({ error: `${name} not found` });
    return item;
  });
}

registerRoute("skins", skins);
registerRoute("vehicles", vehicles);
registerRoute("weapons", weapons);
registerRoute("colors", colors);

app.listen({ port: 3000, host: "0.0.0.0" }, () => {
  console.log("API ready at http://0.0.0.0:3000");
});

