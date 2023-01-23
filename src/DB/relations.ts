import { roomsTypesModel } from './models/roomsTypes.model'
import { linksModel } from './models/links.model'
import { roomsModel } from './models/rooms.model'
import { commentsModel } from './models/comments.model'
import { optionsModel } from './models/options.model'
import { ROOMS_OPTIONS_TABLE_NAME } from './models/roomsOptions.model'

export function setupRelations () {
  roomsTypesModel.hasOne(roomsModel, {
    as: 'room',
    foreignKey: 'idRoomsType'
  })
  roomsModel.belongsTo(roomsTypesModel, { as: 'roomType' })

  linksModel.hasOne(roomsModel, {
    as: 'room',
    foreignKey: 'idLink'
  })
  roomsModel.belongsTo(linksModel, { as: 'link' })

  roomsModel.hasMany(commentsModel, {
    as: 'comments',
    foreignKey: 'idRooms'
  })
  commentsModel.belongsTo(roomsModel, { as: 'room' })

  roomsModel.belongsToMany(optionsModel, {
    as: 'options',
    through: ROOMS_OPTIONS_TABLE_NAME,
    foreignKey: 'idRoom',
    otherKey: 'idOption'
  })
  optionsModel.belongsToMany(roomsModel, {
    as: 'rooms',
    through: ROOMS_OPTIONS_TABLE_NAME,
    foreignKey: 'idOption',
    otherKey: 'idRoom'
  })
}
