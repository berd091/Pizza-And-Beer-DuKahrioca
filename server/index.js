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
