import express from 'express'
import { linksRouter } from './links/links.routes'

// types
import { Express } from 'express-serve-static-core'

export function routerApi (app: Express) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/links', linksRouter)
}
