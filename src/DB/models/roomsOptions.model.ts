import { DataTypes, ModelAttributes } from 'sequelize'
import { roomsModel } from './rooms.model'
import { optionsModel } from './options.model'
import { sequelize } from '../connection'

const roomsOptionsSchema: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  idRoom: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_room',
    references: {
      model: roomsModel.tableName,
      key: 'id'
    }
  },
  idOption: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_option',
    references: {
      model: optionsModel.tableName,
      key: 'id'
    }
  }
}

export const ROOMS_OPTIONS_TABLE_NAME = 'rooms_options'

export const roomsOptionsModel = sequelize.define(ROOMS_OPTIONS_TABLE_NAME, roomsOptionsSchema)
