const mongoose = require('mongoose');

// URI de conexão do MongoDB Atlas
const uri = 'mongodb+srv://bernardo:dukahrioca0123@cluster0.m6pbtrx.mongodb.net/?retryWrites=true&w=majority';

// Configuração e conexão com o banco de dados
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conectado ao banco de dados!');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });
