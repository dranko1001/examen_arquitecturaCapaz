//?MODULO PARA CONEXION A LA BASE DE DATOS

import mysql from 'mysql2';
let cnx;
try {
    cnx = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "interpolice",
        port: "3306", //3306 puerto por defecto de mysql, pero este cambia dependiendo del puerto que se haya configurado en el servidor
    });
    // console.log (`conexion exitosa a la base de datos:${cnx}`);
} catch (error) {
    console.error(`ha ocurrido un error en la conexion: ${error.message}`);
}
export { cnx };