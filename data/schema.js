import { buildSchema } from "graphql";

// Define the schema with a simple query
const schema = buildSchema(`
  
    type Product {
        id: ID
        name: String
        description: String
        price: Float
        soldout: Boolean
  }
    
    type Query {
        product: Product
  }
`);

// Export the schema
export default schema;  // Export the schema so it can be used in index.js