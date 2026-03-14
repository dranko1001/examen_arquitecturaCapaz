

import express from 'express';
import { cnx } from './bdatos.js';

export const vehiculos = express();





vehiculos.get('/vehiculos/listartodos', (request, response) => {


    let sql = 'SELECT * FROM vehiculos ORDER BY placa';

    cnx.query(sql, (error, result, fields) => {
        response.send(result);
    });



});



vehiculos.get('/vehiculos/listarporplaca/:placa', (request, response) => {


    let placa=request.params.placa;

    let sql = 'SELECT * FROM vehiculos WHERE placa= "?"';
 
    cnx.query(sql, [placa], (error, result, fields) => {
        response.status(200).send(result);
    });

 
});


vehiculos.delete('/vehiculos/borrarporplaca/:placa', (request, response) => {

   
    let placa=request.params.placa;

    let sql = 'DELETE FROM vehiculos WHERE `vehiculos`.`placa` =?';

    cnx.query(sql, [placa], (error, result, fields) => {
        response.status(200).send(result);
    });



});





vehiculos.post('/vehiculos/crear', (request, response) => {


 let datosformulario = {
        placa: request.body.placa,
        descripcion: request.body.descripcion,
        cilindraje: request.body.cilindraje,
        marca: request.body.marca,
        modelo: request.body.modelo,
        fotografia: request.body.fotografia,
        observaciones: request.body.observaciones,
    };



    let sql = 'INSERT INTO vehiculos SET  ?';

    cnx.query(sql, [datosformulario], (error, result, fields) => {
        response.status(200).send(result);
    });

    //devolver la data en formato json

});

//*editar vehiculo

vehiculos.put('/vehiculos/editar/:placa', (request, response) => {

    let placa =request.params.placa;


 let datosformulario = {
        placa: request.body.placa,
        descripcion: request.body.descripcion,
        cilindraje: request.body.cilindraje,
        marca: request.body.marca,
        modelo: request.body.modelo,
        fotografia: request.body.fotografia,
        observaciones: request.body.observaciones,
    };


  
    let sql = 'UPDATE vehiculos SET ? WHERE placa = ?';

    cnx.query(sql, [datosformulario, placa],(error, result, fields) => {
        response.status(200).send(result);
    });
    });

