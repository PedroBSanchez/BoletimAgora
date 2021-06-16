const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

//Chamar Rotas
const rotaEscolas = require('./routes/escolas.js');

//Configurações e melhorias
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false})); //Apenas dados simples
app.use(bodyParser.json()); //json de entrada no body

//Rotas
app.use('/escolas', rotaEscolas);

//Quando não encontra rota entra aqui
app.use((req, res, next)=>{
    const erro = new Error('Não Encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
});

module.exports = app;