import { port } from './config.js'
import express from 'express'
import cors from 'cors'
import classRouter from './api/routers/classRouter.js'
import connection from './db/connect.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/class', classRouter)

const start = async () => {
  try {
    await connection.connect()
    app.listen(port, error => {
      if (!error) console.log('Server is Successfully Running, and App is listening on port ' + port)
      else console.log("Error occurred, server can't start", error)
    })
  } catch (error) {
    console.log("Error occurred, server can't start", error)
  }
}

start()
