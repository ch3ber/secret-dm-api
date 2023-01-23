import { URI } from '@/config/config'
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true
})

async function executeAfterSequelizeInitialization () {
  await sequelize.authenticate()
  const { setupRelations } = await import('./relations')
  setupRelations()
}

executeAfterSequelizeInitialization()

export { sequelize }
