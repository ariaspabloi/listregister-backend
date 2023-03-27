import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 3000
const mongodbServer = process.env.MONGODB_SERVER
const mongodbUser = process.env.MONGODB_USER
const mongodbPassword = process.env.MONGODB_PASSWORD

export { port, mongodbServer, mongodbUser, mongodbPassword }
