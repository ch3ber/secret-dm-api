import { DataTypes } from 'sequelize'
import { sequelize } from '../connection'

const optionsSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}

export const OPTIONS_TABLE_NAME = 'options'

export const optionsModel = sequelize.define(OPTIONS_TABLE_NAME, optionsSchema)
