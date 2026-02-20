import mysql from "mysql2/promise";
import dotenv from "dotenv"; 
dotenv.config(); //carga las variables de entorno desde el archivo .env
let cnx ="";
try {
    cnx =mysql.createPool({
        host:process.env.HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_BASE,
        port:process.env.DB_PORT,
        wififorconnection:true,
        connectionlimit: 10,
        queuelimit: 0
    });
    const conexion = await cnx.getConnection();
    console.log("conexion exitosa a la base de datos");
    conexion.release(); //CIERRA LA CONEXION DE PRUEBA
    // console.log("conexion exitosa a la base de datos"); 
}
catch (error) {
    console.log(`error en la conexion a la base de datos ${error.message}`);   
};
export const db=cnx;
