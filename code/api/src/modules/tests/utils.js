import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';

let server = express();
server.use("/", graphqlHTTP({
    schema: schema,
    graphiql: false
}));

module.exports = server;