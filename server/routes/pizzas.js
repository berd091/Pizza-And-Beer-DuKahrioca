const express = require('express');
const router = express.Router();
const axios = require('axios');

// Rota para adicionar uma pizza
router.post('/', async (req, res) => {
  const { pizzaId, quantity } = req.body;

  try {
    const response = await axios.get(`http://localhost:3001/api/pizzas/${pizzaId}`);
    const pizza = response.data;

    const totalPrice = pizza.price * quantity;
    const cartItem = {
      pizza: pizza.id,
      quantity: quantity,
      totalPrice: totalPrice
      // Adicione mais campos conforme necessário para representar os dados do pedido
    };

    const cartResponse = await axios.post('http://localhost:3001/api/cart', cartItem);
    const savedCartItem = cartResponse.data;

    res.status(201).json(savedCartItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
