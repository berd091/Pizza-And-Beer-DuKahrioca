const express = require('express');
const app = express();
const mongoose = require('mongoose');
const pizzaRoutes = require('./routes/pizzas');
const cartRoutes = require('./routes/cart');
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Conexão com o banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/pizza-shop', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na conexão com o banco de dados:'));
db.once('open', () => console.log('Conexão com o banco de dados estabelecida com sucesso.'));

// Configuração das rotas
app.use('/api/pizzas', pizzaRoutes);
app.use('/api/cart', cartRoutes);

// Inicialização do servidor
app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001.');
});
