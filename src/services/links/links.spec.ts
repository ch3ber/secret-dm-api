import { describe, expect, test, beforeEach } from '@jest/globals'
import { LinksService } from './links.service'

describe('Links service', () => {
  test('The service should be a class', () => {
    const linksService = new LinksService()
    expect(linksService).toBeInstanceOf(LinksService)
  })

  describe('Create link method', () => {
    let linksService: LinksService
    const password = 'asdfqwer'

    beforeEach(() => {
      linksService = new LinksService()
    })

    test('should return a promise with a string', async () => {
      expect(linksService.generateLink(password)).toBeInstanceOf(Promise)

      const value = await linksService.generateLink(password)
      expect(typeof value).toBe('string')
    })

    // this test dont be able in typescript
    // test('the first param should be a string', () => {
    //   expect(() => linksService.generateLink(true)).toThrowError('The password must be a string')
    // })

    test.skip('The link must be a url', async () => {
      const link = await linksService.generateLink(password)
      const linkRegex = expect.stringMatching(/^http?s:\/\/\w+$/)
      // http://localhost/asdfqwer
      expect(link).toEqual(linkRegex)
    })
  })
})
