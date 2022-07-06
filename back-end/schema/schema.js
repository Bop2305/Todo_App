const { gql } = require("apollo-server")

const typeDefs = gql`
  type Todo {
    id: Int!
    description: String!
    isFinished: Boolean!
  }

  type Query {
    todos: [Todo]
    todo (id: Int!) : Todo
  }

  type Mutation {
    createTodo (id: Int!, description: String!, isFinished: Boolean!): Todo
    updateTodo (id: Int!, description: String, isFinished: Boolean): Todo
    deleteTodo (id: Int!): [Todo]
  }
`
module.exports = typeDefs