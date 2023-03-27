import * as classService from '../../services/classService.js'

export const getValidateClassId = async (req, res) => {
  const classId = req.params.classId
  if (!!classId) return res.status(400)
  const existId = await classService.getExistClassCode(classId)
  if (existId) return res.status(409)
  return res.status(200).json()
}

export const postClassRecord = async (req, res) => {
  const classId = req.params.classId
  const record = req.body
  //TODO: RETORNAR OBJECTO ACTUALIZADO y true o false
  classService.postClassRegister(classId, record)
  return res.status(200).json()
}

export const postNewClass = async (req, res) => {
  const { classId } = req.body
  const classKey = crypto.randomUUID()
  const newClass = await classService.postNewClass({ classId, classKey })
  if (!newClass) return res.status(400).json()
  return res.status(200).json(newClass)
}

export const generateScript = async (req, res) => {
  const { classKey } = req.body
  const records = await classService.getGenerateScript(classKey)
  return res.status(200).json(records)
}
