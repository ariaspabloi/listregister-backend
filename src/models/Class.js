export default class Class {
  #_id
  #records
  #classKey

  constructor({ _id, records, classKey }) {
    this.#_id = _id
    this.#setRecords(records)
    this.#setClassKey(classKey)
  }

  addRecord(record) {
    const index = this.#records.findIndex(r => r.rut === record.rut)
    if (index !== -1) return
    this.#records.push(record)
  }

  set _id(value) {
    if (!value) return
    // if (typeof value !== 'string')
    //   throw new Api400Error('El id debe estar formado por caracteres.');
    this.#_id = value
  }

  #setRecords(value) {
    if (!value) {
      this.#records = []
      return
    }
    //if (!Array.isArray(value)) throw new Api400Error('Los productos debe estar formado por un array.')
    this.#records = value
  }

  #setClassKey(value) {
    if (!value) return
    // if (typeof value !== 'string')
    //   throw new Api400Error('El id debe estar formado por caracteres.');
    this.#classKey = value
  }

  dto() {
    return Object.freeze({
      ...(this.#_id && { _id: this.#_id }),
      records: this.#records,
      classKey: this.#classKey,
    })
  }

  get _id() {
    return this.#_id
  }
  get records() {
    return this.#records
  }
  get classKey() {
    return this.#classKey
  }
}
