//? API REST: GET, POST, PUT, DELETE
//*importamos la libreria express
import express from "express";
import cors from "cors";


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



//*encemos el servicio - prendemos la API
app.listen(port, () => {
    console.log(`servidor corriendo en http://localhost:${port}`);
});
