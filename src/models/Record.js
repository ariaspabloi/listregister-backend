export default class Record {
  #rut
  #comment

  constructor({ rut, comment }) {
    this.#setRut(rut)
    this.#setComment(comment)
  }

  #setComment(value) {
    if (!value) return
    // if (typeof value !== 'string')
    //   throw new Api400Error('El id debe estar formado por caracteres.');
    this.#comment = value
  }

  #setRut(value) {
    if (!value) return
    // if (typeof value !== 'string')
    //   throw new Api400Error('El id debe estar formado por caracteres.');
    this.#rut = value
  }

  dto() {
    return Object.freeze({
      rut: this.#rut,
      comment: this.#rut,
    })
  }

  get rut() {
    return this.#rut
  }

  get comment() {
    return this.#comment
  }
}
