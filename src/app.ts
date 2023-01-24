import express from 'express'
import morgan from 'morgan'
import { config } from './config/config'
import { routerApi } from './routes'

export const appConfig = () => {
  const app = express()

  /** Load middlewares */
  app.use(express.json())
  if (config.isProduction) {
    app.use(morgan('tiny'))
  } else {
    app.use(morgan('dev'))
  }
  // app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

  routerApi(app)

  return app
}
