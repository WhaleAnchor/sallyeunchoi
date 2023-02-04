const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  products: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    quantity: {
      type: Number,
      required: true
    }
  }],
  totalPrice: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['CREATED', 'PROCESSING', 'CANCELLED', 'COMPLETED'],
    default: 'CREATED'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
