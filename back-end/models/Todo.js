const { DataTypes } = require('sequelize')
const sequelize = require('../dbConfig')

const Todo = sequelize.define('Todo', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isFinished: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
}, {
  tableName: 'todo',
  timestamps: false
})

module.exports = Todo
