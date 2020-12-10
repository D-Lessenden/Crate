import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';

let server = express();
server.use("/", graphqlHTTP({
    schema: schema,
    graphiql: false,
    context: {
      auth: {
        user: { id: 1 },
        isAuthenticated: true
      }
    }
}));

module.exports = server;
