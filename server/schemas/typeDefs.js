// gql imported
const { gql } = require('graphql-tag');

const typeDefs = gql`
  type Query {
    products: [Product]!
    product(id: ID!): Product
    users: [User]!
    user(id: ID!): User
    currentUser: User
  }

  type Mutation {
    signup(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
    addToCart(productId: ID!): Cart
    removeFromCart(productId: ID!): Cart
    placeOrder(cartId: ID!): Order
  }

  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    token: String!
    orders: [Order]!
    cart: Cart
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
  }

  type Cart {
    id: ID!
    user: User!
    items: [CartItem]!
  }

  type CartItem {
    id: ID!
    product: Product!
    quantity: Int!
  }

  type Order {
    id: ID!
    user: User!
    items: [OrderItem]!
    total: Float!
    createdAt: String!
  }

  type OrderItem {
    id: ID!
    product: Product!
    quantity: Int!
    price: Float!
  }
`;

module.exports = typeDefs;