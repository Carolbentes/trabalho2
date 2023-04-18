const express = require('express');
const app = express();

const rotaProdutos = require('./routes/produtos.js');

app.use('/produtos', rotaProdutos);

app.use('/teste',(req, res, next) => {
    res.status(200).send({
      mensagem: 'ok, deu certo'
    });
});

module.exports = app;
    