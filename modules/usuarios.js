//MODULO PARA MIPULACION DEL USUARIO

import express from 'express';
import { cnx } from './bdatos.js';

export const usuarios = express();

//crud basico de ciudadanos

//Listar todos los ciudadanos

usuarios.get('/usuarios/listartodos', (request, response) => {

    //:Hacer la consulta a la base de datos
    let sql = 'SELECT * FROM usuarios ORDER BY APELLIDOS';

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

usuarios.get('/usuarios/listarporid/:id', (request, response) => {

    //Recibimos el parametro de la consulta 
    let id=request.params.id;
    //:Hacer la consulta a la base de datos
    //consulta parametrizada con signo de pregunta
    let sql = 'SELECT * FROM usuarios WHERE ID=?';
    // let sql = "SELECT * FROM ciudadanos WHERE id=${id}"; <-forma peligrosa porque permite sql inyeccion.
    //Ejecutar la consulta en la base de datos
    cnx.query(sql, [id], (error, result, fields) => {
        response.status(200).send({result});
    });

    //devolver la data en formato json

});

//borrar registro - borrado real

usuarios.delete('/usuarios/borrarporid/:id', (request, response) => {

    //Recibimos el parametro de la consulta 
    let id=request.params.id;
    //:Hacer la consulta a la base de datos
    //consulta parametrizada con signo de pregunta
    let sql = 'DELETE FROM usuarios WHERE ID=?';
    // let sql = "SELECT * FROM ciudadanos WHERE id=${id}"; <-forma peligrosa porque permite sql inyeccion.
    //Ejecutar la consulta en la base de datos
    cnx.query(sql, [id], (error, result, fields) => {
        response.status(200).send({result});
    });

    //devolver la data en formato json

});

//crear ciudadanos



usuarios.post('/usuarios/crear', (request, response) => {

    //Recibimos los parametros enviados en la consulta - payload- body
let datosformulario = {
    nombre: request.body.nombre,
    apellidos: request.body.apellidos,
    email: request.body.email,
    password: request.body.password,
    avatar: request.body.avatar,
    rol: request.body.rol
};


    //:Hacer la consulta a la base de datos
    //consulta parametrizada con signo de pregunta
    let sql = 'INSERT INTO usuarios SET  ?';
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

usuarios.put('/ciudadano/editar/:id', (request, response) => {
    //recibimos los parametros de la consulta
    let id =request.params.id;

    //Recibimos los parametros enviados en la consulta - payload- body
let datosformulario = {
    nombre: request.body.nombre,
    apellidos: request.body.apellidos,
    email: request.body.email,
    password: request.body.password,
    avatar: request.body.avatar,
    rol: request.body.rol
};


    //:Hacer la consulta a la base de datos
    //consulta parametrizada con signo de pregunta
    let sql = 'UPDATE usuarios SET ? WHERE ID = ?';
    // let sql = "SELECT * FROM ciudadanos WHERE id=${id}"; <-forma peligrosa porque permite sql inyeccion.
    //Ejecutar la consulta en la base de datos
    cnx.query(sql, [datosformulario, id],(error, result, fields) => {
        response.status(200).send({result});
    });
    });





