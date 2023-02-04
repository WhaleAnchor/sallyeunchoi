const { AuthenticationError, UserInputError } = require('@apollo/server');
const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');
const Cart = require('../models/Cart');

const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {

      user: (_, args, context) => {
        if (!context.user) {
          throw new AuthenticationError('You must be logged in to access your profile');
        }
        return User.findOne({ _id: context.user.id });
      },

      products: () => Product.find({}),

      orders: () => Order.find({}),

      cart: (_, args, context) => {
        if (!context.user) {
          throw new AuthenticationError('You must be logged in to access your cart');
        }
        return Cart.findOne({ user: context.user.id });
      },
    },
    
    Mutation: {
      addProduct: (_, args) => {
        const product = new Product({
          name: args.name,
          description: args.description,
          price: args.price
        });
        return product.save();
      },
      addOrder: (_, args, context) => {
        if (!context.user) {
          throw new AuthenticationError('You must be logged in to place an order');
        }
        const order = new Order({
          products: args.products,
          totalPrice: args.totalPrice,
          user: context.user.id
        });
        return order.save();
      },
      updateCart: (_, args, context) => {
        if (!context.user) {
          throw new AuthenticationError('You must be logged in to access your cart');
        }
        const cart = Cart.findOne({ user: context.user.id });
        if (!cart) {
          throw new UserInputError('Cart not found');
        }
        return Cart.findOneAndUpdate(
          { user: context.user.id },
          {
            $push: {
              products: {
                product: args.product,
                quantity: args.quantity
              }
            }
          },
          { new: true }
        );
      },
      addUser: async (_, args) => {
        const existingUser = await User.findOne({ email: args.email });
        if (existingUser) {
          throw new UserInputError('Email already exists');
        }
        const user = new User({
          name: args.name,
          email: args.email,
          password: args.password,
          address: args.address
        });
        const savedUser = await user.save();
        return {
          token: signToken(savedUser),
          user: savedUser
        };
      },
    },
};

module.exports = resolvers;

