//?MODULO PARA CONEXION A LA BASE DE DATOS

import mysql from 'mysql2';
import dotenv from "dotenv"; 
dotenv.config();

let cnx;
try {
    cnx = mysql.createConnection({
        host: process.env.HOST || "localhost",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_BASE || "interpolice",
        port: process.env.DB_PORT || "3306", 
    });
    // console.log (`conexion exitosa a la base de datos:${cnx}`);
} catch (error) {
    console.error(`ha ocurrido un error en la conexion: ${error.message}`);
}
export { cnx };