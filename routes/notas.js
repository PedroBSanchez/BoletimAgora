const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;


router.get('/:id_aluno',(req, res, next) =>{
    mysql.getConnection((error, conn)=>{
        if(error){return res.status(500).send({error: error}) }
        conn.query(
            'SELECT n.id_nota, n.id_aluno, n.bim1, n.bim2, n.bim3, n.bim4, m.nome as nome_materia, a.nome, a.num_matricula FROM notas n join materias m on m.id_materia = n.id_materia join alunos a on a.id_aluno = n.id_aluno where n.id_aluno = ?;',
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