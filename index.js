const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const express = require('express');

const typeDefs = require('./graphql/typedefs');
const resolvers = require('./graphql/resolvers');

const app = express();

// CORS Configuration
app.use(cors({
  origin: 'https://speakx.netlify.app',
  credentials: true,
}));
app.use(express.json());

const port = 5000;
const url = "mongodb+srv://easwanth123:AbYIaNzfzyeXEyaF@cluster0.bkvrbcv.mongodb.net/SpeakX";

mongoose.connect(url,)  .then(() => { console.log("Connected to MongoDB"); })
  .catch(err => { console.error("MongoDB connection error:", err); });

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      const token = req.headers.authorization || '';
      if (token) {
        try {
          const decoded = jwt.verify(token, 'secret');
          return { user: decoded };
        } catch (err) {
          console.error("Invalid token:", err);
        }
      }
      return { req };
    }
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}${server.graphqlPath}`);
  });
};

startServer();
