const express = require('express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

// Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// app.use(routes);
app.use(express.static(path.join(__dirname, './client')));
app.use(express.json());

// Import the ApolloServer class
const { ApolloServer } = require('apollo-server-express');

// Create a new instance of an Apollo server with the GraphQL schema
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
