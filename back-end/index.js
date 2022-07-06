const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')
const cors = require('cors')

require('dotenv').config();

const mysqlDataMethods = require('./data/index')


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ mysqlDataMethods })
})

const app = express()
app.use(cors())

server.start().then(res => {
  server.applyMiddleware({ app });
  app.listen({ port: process.env.PORT || 8000 }, () =>
    console.log(`Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
  )
})