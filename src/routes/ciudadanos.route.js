//las rutas del modelo ciudadano 

import { Router } from "express";

//importamos la logica del controlador para construir

//cada interaccion de la ruta: get, post, put, delete
import { ciudadanoCtr } from "../controllers/ciudadano.controller.js";
//instanciamos el  metodo router de express  para poder crear las rutas
 const router = Router(); 
 //ponemos la ruta del modulo
 //ruta para listar todos los ciudadanos
    router.get("/ciudadano/listartodos", ciudadanoCtr.getCiudadanos);
    router.get("/ciudadano/buscarporid/:id", ciudadanoCtr.getCiudadanosbyId);
     router.post("/ciudadano/crear", ciudadanoCtr.createCiudadano);
       router.delete("/ciudadano/borrar/:id", ciudadanoCtr.deleteCiudadanoById);
        router.put("/ciudadano/actualizar/:id", ciudadanoCtr.updateCiudadano);
    export default router;

    