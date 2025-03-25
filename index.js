import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './data/schema';
import resolvers from './data/resolvers';


// Define the port
const PORT = 8080;

// Create an express server and a GraphQL endpoint
const app = express();

// Define a simple route
app.get('/', (req, res) => {
  res.send('GraqhQL is amazing!');
});

// Define the resolvers
const root = resolvers;

app.use('/graphql', graphqlHTTP({
  schema: schema, // Pass in the schema
  rootValue: root, // Pass in the resolvers
  graphiql: true, // Use graphiql
}));

// Listen on the port
app.listen(PORT, () => {
  console.log(`Running server on localhost:${PORT}/graphql`);   
}); 