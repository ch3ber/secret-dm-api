'use strict'

const { ROOMS_TYPES_TABLE_NAME } = require('../dist/DB/models/roomsTypes.model')
const { LINKS_TABLE_NAME } = require('../dist/DB/models/links.model')
const { ROOMS_TABLE_NAME } = require('../dist/DB/models/rooms.model')
const { COMMENTS_TABLE_NAME } = require('../dist/DB/models/comments.model')
const { OPTIONS_TABLE_NAME } = require('../dist/DB/models/options.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(ROOMS_TYPES_TABLE_NAME, {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      type: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    })

    await queryInterface.createTable(LINKS_TABLE_NAME, {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      url: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    })

    await queryInterface.createTable(ROOMS_TABLE_NAME, {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      createAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.DataTypes.NOW,
        allowNull: false,
        field: 'created_at'
      },
      idPrivate: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        field: 'is_private'
      },
      idRoomsType: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        field: 'id_rooms_types',
        references: {
          model: ROOMS_TYPES_TABLE_NAME,
          key: 'id'
        }
      },
      idLink: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        field: 'id_link',
        references: {
          model: LINKS_TABLE_NAME,
          key: 'id'
        },
        onDelete: 'CASCADE'
      }
    })

    await queryInterface.createTable(COMMENTS_TABLE_NAME, {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      comment: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      idRooms: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: ROOMS_TABLE_NAME,
          key: 'id'
        },
        onDelete: 'SET NULL'
      }
    })

    await queryInterface.createTable(OPTIONS_TABLE_NAME, {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable(ROOMS_TYPES_TABLE_NAME)
    await queryInterface.dropTable(LINKS_TABLE_NAME)
    await queryInterface.dropTable(ROOMS_TABLE_NAME)
    await queryInterface.dropTable(COMMENTS_TABLE_NAME)
    await queryInterface.dropTable(OPTIONS_TABLE_NAME)
  }
}
