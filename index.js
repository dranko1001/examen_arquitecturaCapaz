//? API REST: GET, POST, PUT, DELETE
//*importamos la libreria express
import express from "express";
import cors from "cors";
import dotenv from "dotenv"; //importa la libreria para manejar variables de entorno
//!lo de arriba no debe ir ahi nunca, es solo para el ejemplo
dotenv.config(); //carga las variables de entorno desde el archivo .env
const PORT= 3000 || process.env.APP_PORT; //puerto donde se ejecuta la API, si no encuentra la variable de entorno, usa el puerto 3000
import { ciudadano } from "./modules/ciudadano.js";
import { usuarios } from "./modules/usuarios.js";

//*instanciamos la libreria express en un objeto - app
const app = express();
app.use(express.json()); //serializa los request y responde
app.use(cors());
const port = 3000;

//*primer recurso - endpoint
app.get("/", (request, response) => {
    response.status(200).send("API REST en Express");});

//*segundo recurso - endpoint
// app.get("/ciudadano", (request, response) => {
//     response.status(200).send({
//         id: 1,
//         nombre: "Maximo",
//         apodo: "Purificador",
//         status: true,
//         edad: 25,
//     });
// });

//asigna rutas de cada modulo a la app, del modulo de ciudadano
app.use('/', ciudadano);
app.use('/', usuarios);



//*encemos el servicio - prendemos la API
app.listen(port, () => {
    console.log(`servidor corriendo en http://localhost:${port}`);
    console.log(process.env); //todas las variables de entorno de node js
    console.log(process.env.OS); //sistema operativo en la que se ejcuta node js
    console.log(process.env.NUMBER_OF_PROCESSORS); //numero de procesadores del servidor donde se encuentra node
    console.log(process.env.NODE); //ruta donde esta instalado node js
    console.log(process.env.COMPUTERNAME); //nombre del equipo donde se ejecuta node js
    console.log(process.env.HOST); //variable de entorno que se encuentra en el archivo .env
    console.log(process.env.DB_BASE); //variable de entorno que se encuentra en el archivo .env
});
