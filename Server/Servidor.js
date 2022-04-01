//IMPORTACIONES NECESARIAS

//IMPORTANDO EXPRESS
//const express = require('express')
import express from 'express'

//PROGRAMO LA CLASE SERVIDOR 
export class Servidor {


//COSNTRUCTOR -> DONDE SE DEFINEN LOS ATRIBUTOS DE LA CLASE
constructor(){
        
        this.app = express() //ATRIBUTO APP
        this.enrutarPeticones
    }

    //METODOS DEL SERVIDOR 
    despertarServidor(){
        this.app.listen(4200,function(){
            console.log("Servidor Encendido")
        })

    }

    enrutarPeticones(){
        this.app.get('/API/v1/viernes', function (req, res) {
            res.send('Hello World')
          })
          this.app.get('/API/v1/viernes', function (req, res) {
            res.send('Hello World')
          })
          this.app.post('/API/v1/viernes', function (req, res) {
            res.send('Hello World')
          })
          this.app.put('/API/v1/viernes', function (req, res) {
            res.send('Hello World')
          })
          this.app.delete('/API/v1/viernes', function (req, res) {
            res.send('Hello World')
          })
          
    }


}