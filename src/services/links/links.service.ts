import { config } from '@/config/config'

export class LinksService {
  private encryptPassword (password: string) {
    return password
  }

  async generateLink (password: string) {
    if (typeof password !== 'string') {
      throw new Error('generateLink: The param password must be a string')
    }

    const token = this.encryptPassword(password)
    const link = `${config.appDomain}/?room=${token}`

    return new Promise((resolve, _reject) => resolve(link))
  }
}
