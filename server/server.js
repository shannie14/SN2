const express = require('express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
// Import the ApolloServer class
const { ApolloServer } = require('apollo-server-express');

// Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});

const connectionStringURI = process.env.NODE_ENV == 'production' ? process.env.MONGODB_URL : `mongodb://127.0.0.1:27017/NBTV`;

const app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(express.json());

// app.use(routes);
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'index.html')));
}

//mongoose connection
mongoose.connect(connectionStringURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('SK connected to mongodb successfully')
        console.log(Object.keys(mongoose.connection.collections));
    })


// Create a new instance of an Apollo server with the GraphQL schema
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
