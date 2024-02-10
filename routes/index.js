// require
const express = require('express');
const app = express();

// require pour les options de cors (permettant d'accepter les requêtes)
const cors = require('cors');
const corsOptions = {
    origin: ['http://127.0.0.1:8080', 'http://localhost:8080'],
};

app.use(cors(corsOptions));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

module.exports = app