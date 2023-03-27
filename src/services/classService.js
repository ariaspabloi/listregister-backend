import Class from '../models/Class.js'
import classDao from '../db/daos/index.js'
import Record from '../models/Record.js'

export const getExistClassCode = async classId => {
  const oldClass = await classDao.getById(classId)
  return !!oldClass
}

export const postClassRegister = async (classId, record) => {
  const oldClass = new Class(await classDao.getById(classId))
  const newRecord = new Record(record)
  oldClass.addRecord(newRecord.dto())
  return await classDao.update(oldClass.dto(), classId)
}

export const postNewClass = async data => {
  const newClass = new Class({
    _id: data.classId,
    classKey: data.classKey,
  })
  const returnClass = await classDao.save(newClass.dto())
  return returnClass
}

export const getGenerateScript = async classKey => {
  const oldClass = await classDao.getOneByAttribute('classKey', classKey)
  return oldClass.records
}
