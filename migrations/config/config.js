const { URI, DEV_URI } = require('../../dist/config/config')

module.exports = {
  development: {
    // username: 'root',
    // password: null,
    // database: 'database_development',
    // host: '127.0.0.1',
    url: DEV_URI,
    dialect: 'postgres'
  },
  test: {
    // username: 'root',
    // password: null,
    // database: 'database_test',
    // host: '127.0.0.1',
    url: DEV_URI,
    dialect: 'postgres'
  },
  production: {
    // username: 'root',
    // password: null,
    // database: 'database_production',
    // host: '127.0.0.1',
    url: URI,
    dialect: 'postgres'
  }
}
