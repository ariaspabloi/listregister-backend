import * as classService from '../../services/classService.js'

export const postAddRecord = async (req, res) => {
  const id = req.params.id
  const record = req.body
  //TODO: RETORNAR OBJECTO ACTUALIZADO y true o false
  classService.postAddRecord(id, record)
  return res.status(200).json()
}

export const getCreateClass = async (req, res) => {
  const newClass = await classService.getCreateClass()
  if (!newClass) return res.status(400).json()
  return res.status(200).json(newClass)
}

export const generateScript = async (req, res) => {
  const { key } = req.body
  const records = await classService.getGenerateScript(key)
  return res.status(200).json(records)
}
