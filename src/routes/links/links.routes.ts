import { LinksService } from '@/services/links/links.service'
import express from 'express'

export const linksRouter = express.Router()

const linksService = new LinksService()

linksRouter.post('/', async (req, res) => {
  const password = req.body.password
  const link = await linksService.generateLink(password)
  res.status(201).send(link)
})
