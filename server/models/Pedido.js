const mongoose = require('mongoose');

// Definir o esquema do Pedido
const pedidoSchema = new mongoose.Schema({
  items: [
    {
      id: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      size: {
        type: String,
        required: true
      },
      imageUrl: {
        type: String,
        required: true
      },
      totalPrice: {
        type: Number,
        required: true
      },
      totalCount: {
        type: Number,
        required: true
      }
    }
  ],
  totalPrice: {
    type: Number,
    required: true
  },
  totalCount: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Criar o modelo Pedido com base no esquema
const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido;
