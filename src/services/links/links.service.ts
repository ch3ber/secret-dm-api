import { config } from '@/config/config'
import { linksModel } from '@/DB/models/links.model'
import bcrypt from 'bcryptjs'
export class LinksService {
  private async encryptPassword (password: string) {
    return await bcrypt.hash(password, config.encryptSaltRounds)
  }

  private async saveLinkInDb (link: string) {
    let res
    try {
      res = await linksModel.create({ url: link })
    } catch (e) {
      res = null
    }
    return res
  }

  async generateLink (password: string) {
    if (typeof password !== 'string') {
      throw new Error('generateLink: The param password must be a string')
    }

    const token = await this.encryptPassword(password)
    const link = `${config.appDomain}/?room=${token}`
    await this.saveLinkInDb(link)

    return new Promise((resolve, _reject) => resolve(link))
  }
}
