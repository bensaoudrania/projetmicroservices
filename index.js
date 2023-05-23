const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const livreSchema = require('./livre_schema');
const livreResolver = require('./livre_resolver');

const app = express();
const server = new ApolloServer({ typeDefs: livreSchema, resolvers: livreResolver });

// Ajouter cette ligne pour appeler la méthode start() avant de lancer le serveur
(async () => {
  await server.start();
  server.applyMiddleware({ app });

  const PORT = 4000;

  app.listen(PORT, () => {
    console.log(`GraphQL server running at http://localhost:${PORT}${server.graphqlPath}`);
  });
})();