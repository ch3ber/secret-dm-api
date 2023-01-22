import { config } from '@/config/config'
import { appConfig } from './app'

const app = appConfig()

app.listen(config.port, () => {
  console.log(`App running on port: ${config.port}`)
})
