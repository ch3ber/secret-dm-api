import { describe, expect, test, beforeEach, jest, beforeAll, afterAll } from '@jest/globals'
import { fakePassword, fakeResolvedLink } from '__test__/__mocks__/links.service.mock'
import { LinksService } from './links.service'
import { sequelize } from '@/DB/connection'
import { isUrlRegex } from '__test__/utils/validations'

const saveLinkInDbMock = jest
  .spyOn(LinksService.prototype as any, 'saveLinkInDb')
  .mockImplementation(() => {
    return fakeResolvedLink
  })

describe('Links service', () => {
  beforeAll(async () => {
    await sequelize.authenticate()
  })

  afterAll(async () => {
    await sequelize.close()
  })

  test('The service should be a class', () => {
    const linksService = new LinksService()
    expect(linksService).toBeInstanceOf(LinksService)
  })

  describe('Create link method', () => {
    let linksService: LinksService

    beforeEach(() => {
      linksService = new LinksService()
    })

    test('should return a promise with a string', async () => {
      expect(linksService.generateLink(fakePassword)).toBeInstanceOf(Promise)

      const value = await linksService.generateLink(fakePassword)
      expect(typeof value).toBe('string')
    })

    /**  this test dont be able in typescript
    * test('the first param should be a string', () => {
    *   expect(() => linksService.generateLink(true)).toThrowError('The password must be a string')
    * })
    */

    test('The link must be a url', async () => {
      const link = await linksService.generateLink(fakePassword)

      expect(link).toMatch(isUrlRegex)
    })

    test('save the link in the database', async () => {
      const link = await linksService.generateLink(fakePassword)

      expect(saveLinkInDbMock).toHaveBeenCalledTimes(1)
      expect(link).toMatch(isUrlRegex)
    })
  })
})
