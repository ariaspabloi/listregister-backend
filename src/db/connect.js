import { MongoClient, ServerApiVersion } from 'mongodb'
import { mongodbPassword, mongodbServer, mongodbUser } from '../config.js'

const uri = `mongodb+srv://${mongodbUser}:${mongodbPassword}@${mongodbServer}/?retryWrites=true&w=majority`
const connection = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
})

export default connection
