import { describe, beforeAll, afterAll, test, expect } from '@jest/globals'
import request from 'supertest'

import { config } from '@/config/config'
import { appConfig } from '@/app'
import { sequelize } from '@/DB/connection'
import { fakeLinkPost } from '__test__/__mocks__/links.routes.mock'

// types
import { Express } from 'express-serve-static-core'
import { Server } from 'http'
import { linksModel } from '@/DB/models/links.model'
import { isUrlRegex } from '__test__/utils/validations'

describe('Links router', () => {
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

  test('POST /links should return 201', async () => {
    await api
      .post('/api/v1/links')
      .send(fakeLinkPost)
      .expect(201)
      .then((res) => {
        expect(res.text).toMatch(isUrlRegex)
      })
  })
})
