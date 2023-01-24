import dotenv from 'dotenv'
dotenv.config()

export const config = {
  env: process.env.NODE_ENV || 'dev',
  isProduction: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  dbUrl: process.env.DB_URL,
  appDomain: process.env.APP_DOMAIN,
  encryptSaltRounds: Number(process.env.ENCRYPT_SALT_ROUNDS)
}

// @ts-ignore
export const USER = encodeURIComponent(config.dbUser)
// @ts-ignore
export const PASSWORD = encodeURIComponent(config.dbPassword)

export const URI = config.dbUrl || `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
export const DEV_URI = URI
