const resolvers = {
  Query: {
    todos: async (parent, args, { mysqlDataMethods }) => {
      return await mysqlDataMethods.getAllTodo()
    },
    todo: async (parent, args, { mysqlDataMethods }) => {
      return await mysqlDataMethods.getTodoById(args.id)
    }
  },
  Mutation: {
    createTodo: async (parent, args, { mysqlDataMethods }) => {
      return await mysqlDataMethods.createTodo(args)
    },
    updateTodo: async (parent, args, { mysqlDataMethods }) => {
      return await mysqlDataMethods.updateTodo(args)
    },
    deleteTodo: async (parent, args, { mysqlDataMethods }) => {
      return await mysqlDataMethods.deleteTodo(args.id)
    },
  }
}

module.exports = resolvers