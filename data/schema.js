import { buildSchema } from "graphql";

// Define the schema with a simple query
const schema = buildSchema(`
  
    type Product {
      id: ID
      name: String
      description: String
      price: Float
      soldout: Soldout
      inventory: Int
      stores: [Store]!
  }

    enum Soldout {
      SOLDOUT
      ONSALE
  }

    type Store {
      store: String
  }
    
    type Query {
      getProduct(id: ID): Product
  }

    input StoreInput {
      store: String
  }
    
    input ProductInput {
      id: ID
      name: String
      description: String
      price: Float
      soldout: Soldout
      inventory: Int
      stores: [StoreInput]
  }
    
    type Mutation {
      createProduct(input: ProductInput): Product
      updateProduct(input: ProductInput): Product
      deleteProduct(id: ID!): String
  }

`);

// Export the schema
export default schema;  // Export the schema so it can be used in index.js