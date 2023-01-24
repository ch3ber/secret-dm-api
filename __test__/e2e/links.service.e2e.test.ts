import { describe, test, beforeAll, afterAll, expect } from '@jest/globals'
import request from 'supertest'

import { sequelize } from '@/DB/connection'
import { appConfig } from '@/app'
import { config } from '@/config/config'

// types
import { Express } from 'express-serve-static-core'
import { Server } from 'http'
import { linksModel } from '@/DB/models/links.model'
import { fakeLinkPost } from '__test__/__mocks__/links.routes.mock'
import { isUrlRegex } from '__test__/utils/validations'

describe('E2E for links service', () => {
  let app: Express
  let server: Server<any, any>
  let api: request.SuperTest<request.Test>

  beforeAll(async () => {
    await sequelize.authenticate()
    await linksModel.destroy({ where: {} })

    app = appConfig()
    server = app.listen(config.port)
    api = request(server)
  })

  afterAll(async () => {
    await linksModel.destroy({ where: {} })
    await sequelize.close()
    server.close()
  })

  describe('Generate link', () => {
    test('save the link in the database', async () => {
      await api
        .post('/api/v1/links')
        .send(fakeLinkPost)
        .expect(201)
        .then((res) => {
          // const link = res.text
          // console.log('link: ', link)
          expect(res.text).toMatch(isUrlRegex)
        })
    })
  })
})
