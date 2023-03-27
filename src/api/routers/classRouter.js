import * as classController from '../controllers/classController.js'
import express from 'express'
const classRouter = express.Router()

//testear validez
classRouter.get('/validate/:classCode', classController.getValidateClassId)

//nueva clase y retorna clave
classRouter.post('/new', classController.postNewClass)

//generar script
classRouter.post('/generate', classController.generateScript)

//enviar rut y comentario
classRouter.post('/:classId', classController.postClassRecord)


export default classRouter
