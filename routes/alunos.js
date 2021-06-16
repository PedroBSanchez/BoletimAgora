const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;


router.get('/:id_aluno',(req, res, next) =>{
    mysql.getConnection((error, conn)=>{
        if(error){return res.status(500).send({error: error}) }
        conn.query(
            'SELECT * FROM ALUNOS where id_aluno = ?;',
            [req.params.id_aluno],
            (error, resultado, field)=>{
                conn.release();
                if(error){return res.status(500).send({error: error}) }
                res.status(200).send({escolas: resultado});
            }
        )
    });

        
});

module.exports = router;