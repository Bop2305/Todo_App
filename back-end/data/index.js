const Todo = require('../models/Todo')

const mysqlDataMethods = {
  getAllTodo: async () => {
    return await Todo.findAll()
      .then(result => result)
      .catch(err => console.log('Error: ', err))
  },
  getTodoById: async id => {
    return await Todo.findOne({ where: { id } })
      .then(result => result)
      .catch(err => console.log('Error: ', err))
  },
  createTodo: async todo => {
    return await Todo.create(todo)
      .then(result => result)
      .catch(err => console.log('Error: ', err))
  },
  updateTodo: async todo => {
    const result = await Todo.findOne({ where: { id: todo.id } })
    return await result.update(
      {
        description: todo.description,
        isFinished: todo.isFinished
      })
      .then(result => result)
      .catch(err => console.log('Error: ', err))
  },
  deleteTodo: async id => {
    const result = await Todo.findOne({ where: { id } })
    return await result.destroy()
      .then(() => Todo.findAll())
      .catch(err => console.log('Error: ', err))
  },
}

module.exports = mysqlDataMethods