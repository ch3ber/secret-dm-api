import express from 'express'

export const appConfig = () => {
  const app = express()

  /** Load middlewares */
  app.use(express.json())

  return app
}
