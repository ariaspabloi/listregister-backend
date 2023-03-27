import Class from '../models/Class.js'
import classDao from '../db/daos/index.js'
import Record from '../models/Record.js'

export const getExistClassCode = async id => {
  const oldClass = await classDao.getById(id)
  return !!oldClass
}

export const postAddRecord = async (id, record) => {
  const oldClass = new Class(await classDao.getById(id))
  const newRecord = new Record(record)
  oldClass.addRecord(newRecord.dto())
  return await classDao.update(oldClass.dto(), id)
}

export const getCreateClass = async () => {
  const newClass = new Class({ key: crypto.randomUUID() })
  const returnClass = await classDao.save(newClass.dto())
  return returnClass
}

export const getGenerateScript = async key => {
  const oldClass = await classDao.getOneByAttribute('key', key)
  return oldClass.records
}
