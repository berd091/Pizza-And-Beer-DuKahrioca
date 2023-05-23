const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const connectToMongo = require('./dbConfig');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});

async function startApp() {
    try {
      const db = await connectToMongo();
  
      // Aqui você pode realizar outras operações com o banco de dados, se necessário
  
      // Após concluir as operações, feche a conexão
      db.client.close();
    } catch (error) {
      console.error('Erro ao iniciar o aplicativo:', error);
    }
  }
  
  startApp();
  