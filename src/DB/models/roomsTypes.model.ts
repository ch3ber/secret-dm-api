import { DataTypes, ModelAttributes } from 'sequelize'
import { sequelize } from '../connection'

export const roomsTypesSchema: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}

export const ROOMS_TYPES_TABLE_NAME = 'rooms_types'

export const roomsTypesModel = sequelize.define(ROOMS_TYPES_TABLE_NAME, roomsTypesSchema)
