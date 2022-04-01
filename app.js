//IMPORTANDO dontEnv
//require('dotenv').config()
import 'dotenv/config'

//DESPERTAR EL SERVIDOR
//1.IMPORTAR LA CLASE SERVIDOR
import {Servidor} from './Server/Servidor.js'

//2.UTILIZO LA CLASE SERVIDOR ( CREO UN OBJETO)
let servidorViernes = new Servidor()

//3.LLAMADO AL METODO DESPERTAR SERVIDOR
servidorViernes.despertarServidor()