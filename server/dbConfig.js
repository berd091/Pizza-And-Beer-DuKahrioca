const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017'; // URL de conexão com o MongoDB
const dbName = 'meuBancoDeDados'; // Nome do banco de dados que você deseja conectar

// Função para conectar ao MongoDB e retornar a instância do banco de dados
async function connectToMongo() {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    console.log('Conexão bem-sucedida com o MongoDB!');
    return db;
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    throw error;
  }
}

module.exports = connectToMongo;
