const bodyParser = require("body-parser");
const express = require("express");

const router = express.Router();

const User = require("./models/User");
const Pedido = require("./models/Pedido");

router.use(bodyParser.json());

router.post("/pedidos", (req, res) => {
    const orderData = req.body;
    const novoPedido = new Pedido(orderData); // Crie uma nova instância do modelo de Pedido com os dados recebidos

    // Salve o pedido no MongoDB
    novoPedido
        .save()
        .then(() => {
            // Pedido salvo com sucesso
            res.status(200).send("Pedido realizado com sucesso!");
        })
        .catch((error) => {
            // Tratar erros, como enviar uma resposta de erro para o cliente
            res.status(500).send("Erro ao salvar o pedido.");
        });
});

router.post("/register", (req, res) => {
    const { nome, email, password } = req.body;
  
    // Verifica se o usuário já existe
    User.findOne({ email })
      .then((user) => {
        if (user) {
          // Usuário já existe
          res.status(409).json({ message: "Usuário já existe" });
        } else {
          // Cria um novo usuário
          const newUser = new User({ nome, email, password });
          newUser
            .save()
            .then(() => {
              res.status(201).json({ message: "Usuário registrado com sucesso" });
            })
            .catch((err) => {
              res.status(500).json({ message: "Erro ao criar usuário" });
            });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Erro ao verificar o usuário" });
      });
  });
  
  router.post("/login", (req, res) => {
    const { email, password } = req.body;
  
    // Verifica as credenciais do usuário
    User.findOne({ email, password })
      .then((user) => {
        if (user) {
          res.status(200).json({ message: "Login bem-sucedido" });
        } else {
          res.status(401).json({ message: "Credenciais inválidas" });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Erro ao verificar as credenciais" });
      });
  });

module.exports = router;
