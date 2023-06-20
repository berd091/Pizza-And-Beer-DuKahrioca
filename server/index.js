const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

require('./dbConfig');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});

const User = require('./User');

// Exemplo de utilização do modelo de usuário
app.post('/signup', async (req, res) => {
  try {
    const { username, password, name, email } = req.body;
    // Crie uma instância do usuário
    const newUser = new User({ username, password, name, email });
    // Salve o usuário no banco de dados
    const savedUser = await newUser.save();
    // Responda com o usuário salvo ou outras informações
    res.json(savedUser);
  } catch (error) {
    // Trate o erro, se ocorrer algum problema
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }
    res.json({ message: 'Login realizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Outras rotas e operações relacionadas aos usuários...
