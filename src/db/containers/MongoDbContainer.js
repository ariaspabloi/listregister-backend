import connection from '../connect.js'

export class MongoDbContainer {
  constructor(collectionName, dbName) {
    this.collection = connection.db(dbName).collection(collectionName)
  }

  async getAll() {
    const objects = await this.collection.find().toArray()
    return objects
  }

  async getById(_id) {
    const object = await this.collection.findOne({ _id })
    return object
  }

  async getOneByAttribute(attribute, value) {
    const object = await this.collection.findOne({ [attribute]: value })
    return object
  }

  async save(object) {
    const saved = await this.collection.insertOne({ ...object })
    return object
  }

  async update(object, _id) {
    await this.collection.updateOne({ _id }, { $set: object })
  }

  async deleteById(_id) {
    await this.collection.deleteOne({ _id })
  }

  async deleteAll() {
    await this.collection.deleteMany({})
  }
}
