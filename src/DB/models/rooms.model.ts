import { DataTypes, ModelAttributes } from 'sequelize'
import { sequelize } from '@/DB/connection'
import { roomsTypesModel } from './roomsTypes.model'
import { linksModel } from './links.model'

export const roomsSchema: ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
    field: 'created_at'
  },
  idPrivate: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'is_private'
  },
  idRoomsType: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_rooms_types',
    references: {
      model: roomsTypesModel.tableName,
      key: 'id'
    }
  },
  idLink: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_link',
    references: {
      model: linksModel.tableName,
      key: 'id'
    },
    onDelete: 'CASCADE'
  }
}

export const ROOMS_TABLE_NAME = 'rooms'

export const roomsModel = sequelize.define(ROOMS_TABLE_NAME, roomsSchema)
