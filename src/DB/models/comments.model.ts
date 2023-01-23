import { DataTypes, ModelAttributes } from 'sequelize'
import { roomsModel } from './rooms.model'
import { sequelize } from '../connection'

export const commentsSchema: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idRooms: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: roomsModel.tableName,
      key: 'id'
    },
    onDelete: 'SET NULL'
  }
}

export const COMMENTS_TABLE_NAME = 'comments'

export const commentsModel = sequelize.define(COMMENTS_TABLE_NAME, commentsSchema)
