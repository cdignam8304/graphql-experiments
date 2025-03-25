import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './data/schema';

// Define the port
const PORT = 8080;

// Create an express server and a GraphQL endpoint
const app = express();

// Define a simple route
app.get('/', (req, res) => {
  res.send('GraqhQL is amazing!');
});

// Define a resolver for the query
const root = {
  product: () => {
    return {
      "id": 12345,
      "name": "Widget",
      "description": "A beautiful widget to use in the garden.",
      "price": 34.99,
      "soldout": false
    };
  },
};

app.use('/graphql', graphqlHTTP({
  schema: schema, // Pass in the schema
  rootValue: root, // Pass in the resolver
  graphiql: true, // Use graphiql
}));

// Listen on the port
app.listen(PORT, () => {
  console.log(`Running server on localhost:${PORT}/graphql`);   
}); 