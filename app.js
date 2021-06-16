const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

//Chamar Rotas
const rotaEscolas = require('./routes/escolas.js');
const rotaAlunos = require('./routes/alunos.js');
const rotaNotas = require('./routes/notas.js');

//Configurações e melhorias
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false})); //Apenas dados simples
app.use(bodyParser.json()); //json de entrada no body

app.use((req, res, next)=>{
    res.header('Acess-Control-Allow-Origin', '*');
    res.header(
        'Acess-Control-Allow-Header',
        'Origin, X-Requrested-Width, Content-Type, Accept, Authorization'
    );
    if(req.method === 'OPTIONS'){
        res.header('Acess-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }

    next();
})

//Rotas
app.use('/escolas', rotaEscolas);
app.use('/alunos', rotaAlunos);
app.use('/notas', rotaNotas);

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