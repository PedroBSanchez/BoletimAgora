const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;


router.get('/:id_escola',(req, res, next) =>{
    mysql.getConnection((error, conn)=>{
        if(error){return res.status(500).send({error: error}) }
        conn.query(
            'SELECT * FROM ESCOLAS where id_escola = ?;',
            [req.params.id_escola],
            (error, resultado, field)=>{
                conn.release();
                if(error){return res.status(500).send({error: error}) }
                res.status(200).send({escolas: resultado});
            }
        )
    });

        
});

//TESTES
router.post('/',(req, res, next) =>{
    res.status(201).send({
        mensagem: 'Usando o POST - Rota de Escolas'
    });
});

/*
router.get('/:id_escolas',(req, res, next) =>{
    const id = req.params.id_escolas;
    res.status(200).send({
        mensagem: 'Usando o GET de produto específico - Rota de Escolas',
        id: id
    });
});*/

module.exports = router;
