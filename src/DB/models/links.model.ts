import { DataTypes } from 'sequelize'
import { sequelize } from '../connection'

export const linksSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}

export const LINKS_TABLE_NAME = 'links'

export const linksModel = sequelize.define(LINKS_TABLE_NAME, linksSchema)
