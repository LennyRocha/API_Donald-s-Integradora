const express = require("express");
const router = express.Router();

//Obtener las funciones del controller
const {
    getEmpleado,
    getEmpleados,
    postEmpleado,
    patchEmpleado,
    deleteEmpleado
} = require("../controllers/empleado.controller");
const elToken = require("../Auth/authMiddleware");

const adminToken = require("../Auth/adminAuth");

//Rutas de la API
router.get('/empleados', adminToken, getEmpleados)

router.get('/empleados/:id', elToken, getEmpleado)

router.post('/empleados', postEmpleado)

router.patch('/empleados/:id', elToken, patchEmpleado)

router.delete('/empleados/:id', adminToken, deleteEmpleado)

module.exports = router