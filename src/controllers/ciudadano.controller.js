//controlador para ciudadano:encargado de escuchar y responder
//peticiones

import { ciudadanoModel  } from "../models/ciudadano.model";    

export const getciudadanos = async (request, response) => {
 //codigo protegido por try catch para manejar errores
 try {


const result = await ciudadanoModel.findAll();  
response.json(result); 



 }
 catch (error) {
response.status(500).json({message: "error al listar los ciudadanos ${error.message}"});



 }



 }

 //este va a buscar por id||
 export const getciudadanosbyId = async (request, response) => {
 //codigo protegido por try catch para manejar errores
 try {


const result = await ciudadanoModel.findById(request.params.id);  
response.json(result); 



 }
 catch (error) {
response.status(500).json({message: `error al buscar su ciudadano ${error.message}`});



 }



 }
 //crear un nuevo ciudadano con id
export const createCiudadano = async (request, response) => {
const data = {
    "nombre": request.body.nombre,
    "apellidos": request.body.apellidos,
    "apodo": requestquest.body.apodo,
    "fechaNace": request.body.fechaNace,
    "planetaOrigen": request.body.planetaOrigen,
    "planetaResidencia": request.body.planetaResidencia,
    "foto": request.body.foto,
    "codigQr": request.body.codigQr,
    "estado": request.body.estado
};
try {
    const result = await ciudadanoModel.create(data);
    response.json(result);
} catch (error) {
    response.status(500).json({message: `error al crear el ciudadano ${error.message}`});
}
} 

 export const deleteCiudadanoById = async (request, response) => {
 //codigo protegido por try catch para manejar errores
 try {


const result = await ciudadanoModel.delete(request.params.id);  
response.json(result); 



 }
 catch (error) {
response.status(500).json({message: `error al eliminar su ciudadano ${error.message}`});



 }



 }

 export const updateCiudadano = async (request, response) => {
// const data = {
//     "nombre": request.body.nombre,
//     "apellidos": request.body.apellidos,
//     "apodo": requestquest.body.apodo,
//     "fechaNace": request.body.fechaNace,
//     "planetaOrigen": request.body.planetaOrigen,
//     "planetaResidencia": request.body.planetaResidencia,
//     "foto": request.body.foto,
//     "codigQr": request.body.codigQr,
//     "estado": request.body.estado
// };
try {
    const result = await ciudadanoModel.update(request.params.id, request.body);
    response.json(result);
} catch (error) {
    response.status(500).json({message: `error al actualizar el ciudadano ${error.message}`});
}
} 
