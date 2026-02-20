//MODULO PARA MIPULACION DEL USUARIO

import express from 'express';
import { cnx } from './bdatos.js';

export const ciudadano = express();

//crud basico de ciudadanos

//Listar todos los ciudadanos

ciudadano.get('/ciudadano/listartodos', (request, response) => {

    //:Hacer la consulta a la base de datos
    let sql = 'SELECT * FROM ciudadanos ORDER BY apellidos';

    //Ejecutar la consulta en la base de datos
    cnx.query(sql, (error, result, fields) => {
        // console.log(result);
        // console.log(fields);
        // console.log(error);
        response.send({result});
    });

    //devolver la data en formato json

});


//Listar ciudadanos por ID

ciudadano.get('/ciudadano/listarporid/:id', (request, response) => {

    //Recibimos el parametro de la consulta 
    let id=request.params.id;
    //:Hacer la consulta a la base de datos
    //consulta parametrizada con signo de pregunta
    let sql = 'SELECT * FROM ciudadanos WHERE codigo=?';
    // let sql = "SELECT * FROM ciudadanos WHERE id=${id}"; <-forma peligrosa porque permite sql inyeccion.
    //Ejecutar la consulta en la base de datos
    cnx.query(sql, [id], (error, result, fields) => {
        response.status(200).send({result});
    });

    //devolver la data en formato json

});

//borrar registro - borrado real

ciudadano.delete('/ciudadano/borrarporid/:id', (request, response) => {

    //Recibimos el parametro de la consulta 
    let id=request.params.id;
    //:Hacer la consulta a la base de datos
    //consulta parametrizada con signo de pregunta
    let sql = 'DELETE FROM ciudadanos WHERE codigo=?';
    // let sql = "SELECT * FROM ciudadanos WHERE id=${id}"; <-forma peligrosa porque permite sql inyeccion.
    //Ejecutar la consulta en la base de datos
    cnx.query(sql, [id], (error, result, fields) => {
        response.status(200).send({result});
    });

    //devolver la data en formato json

});

//crear ciudadanos



ciudadano.post('/ciudadano/crear', (request, response) => {

    //Recibimos los parametros enviados en la consulta - payload- body
 let datosformulario = {
        nombre: request.body.nombre,
        apellidos: request.body.apellidos,
        apodo: request.body.apodo,
        fechaNace: request.body.fechaNace,            
        planetaOrigen: request.body.planetaOrigen,
        planetaResidencia: request.body.planetaResidencia,
        foto: request.body.foto,
        codigQr: request.body.codigQr,
        estado: request.body.estado
    };


    //:Hacer la consulta a la base de datos
    //consulta parametrizada con signo de pregunta
    let sql = 'INSERT INTO ciudadanos SET  ?';
    // let sql = "SELECT * FROM ciudadanos WHERE id=${id}"; <-forma peligrosa porque permite sql inyeccion.
    //Ejecutar la consulta en la base de datos
    cnx.query(sql, [datosformulario], (error, result, fields) => {
        response.status(200).send({result});
    });

    //devolver la data en formato json

});
/*
//?consulta de json
{
    "nombre": "Juanito",
    "apellidos": "López",
    "apodo": "El Mencho",
    "fechaNace": "2005-05-15",
    "planetaOrigen": "Jupiter",
    "planetaResidencia": "Marte",
    "foto": "foto.jpg",
    "codigQr": "15464",
    "estado": "A"
}
*/

//*editar ciudadano

ciudadano.put('/ciudadano/editar/:id', (request, response) => {
    //recibimos los parametros de la consulta
    let id =request.params.id;

    //Recibimos los parametros enviados en la consulta - payload- body
 let datosformulario = {
        nombre: request.body.nombre,
        apellidos: request.body.apellidos,
        apodo: request.body.apodo,
        fechaNace: request.body.fechaNace,            
        planetaOrigen: request.body.planetaOrigen,
        planetaResidencia: request.body.planetaResidencia,
        foto: request.body.foto,
        codigQr: request.body.codigQr,
        estado: request.body.estado
    };


    //:Hacer la consulta a la base de datos
    //consulta parametrizada con signo de pregunta
    let sql = 'UPDATE ciudadanos SET ? WHERE codigo = ?';
    // let sql = "SELECT * FROM ciudadanos WHERE id=${id}"; <-forma peligrosa porque permite sql inyeccion.
    //Ejecutar la consulta en la base de datos
    cnx.query(sql, [datosformulario, id],(error, result, fields) => {
        response.status(200).send({result});
    });
    });





