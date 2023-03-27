import * as classController from '../controllers/classController.js'
import express from 'express'
const classRouter = express.Router()

//crear clase -> retorna key
classRouter.get('/create', classController.getCreateClass)

//generar script
classRouter.post('/generateScript', classController.generateScript)

//enviar rut y comentario
classRouter.post('/:id', classController.postAddRecord)

export default classRouter
