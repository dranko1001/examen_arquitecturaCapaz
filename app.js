//? API REST: GET, POST, PUT, DELETE
//*importamos la libreria express
import express from "express";
import cors from "cors";
import ciudadanosRutas from "./routes/ciudadanos.route.js";

//*instanciamos la libreria express en un objeto - app
const app = express();
app.use(express.json()); //serializa los request y responde
app.use(cors());
const port = 3000;

app.use('/api', ciudadanosRutas);
export default app;

