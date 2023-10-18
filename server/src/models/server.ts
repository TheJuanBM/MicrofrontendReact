import cors from 'cors'
import 'dotenv/config'
import express, { Express } from 'express'

import { ENV } from '../config'
import router from '../routes'

export class Server {
  readonly app: Express = express()
  private readonly port: string = ENV.PORT

  constructor() {
    this.routes()
    this.middlewares()
  }

  public middlewares() {
    this.app.use(
      cors({
        credentials: true,
        origin: [ENV.CORS_ALLOW],
        optionsSuccessStatus: 200,
        allowedHeaders: ['Content-Type', 'Authorization']
      })
    )
    this.app.use(express.json())
    this.app.use(express.static('public'))
  }

  public routes() {
    this.app.use('/api', cors(), router)
  }

  public start() {
    this.app.listen(this.port, () => console.log(`Running in the port ${this.port}`))
  }
}
