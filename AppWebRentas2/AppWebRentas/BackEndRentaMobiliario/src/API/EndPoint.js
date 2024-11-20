const express = require("express");
const router = express.Router();

const {	creadenciales, renta, inventario} = require("../Servicios/Raed/Listas")

router.get("/in/sesion/:user/:pass", creadenciales)

router.get("/datos/inventario", inventario)

router.get("/in/renta/:paquete/:unidades/:color/:fecha/:lugar/:evento", renta)



module.exports = router
