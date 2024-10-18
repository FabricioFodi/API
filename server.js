const express = require('express');
const server = express();
const alunos = [];

server.use(express.json());

server.get('/', (req, res) => {
    console.log('Minha rota GET');
    res.json({ mensagem: 'http://localhost:3000/' });
});

server.post('/alunos', (req, res) => {
    console.log('Minha requisição de alunos');
    console.log('Body Requisição', req.body);
    
    //pegar os dados enviados pelo cliente
    const idAluno = req.body.id;
    const nomeAluno = req.body.nome;
    const MatriculaAluno = req.body.Matricula;

    console.log('ID:', idAluno);
    console.log('Nome:', nomeAluno);
    console.log('Matricula:', MatriculaAluno);
    
    //salvar na lista de alunos

    const aluno = {
        id: idAluno,
        nome: nomeAluno,
        Matricula: MatriculaAluno
    }
    alunos.push(aluno);

    res.json({ mensagem: 'Aluno cadastro' });
});

server.get('/', (req, res) => {
    res.json({ mensagem: 'Minha Primeira Rota' });
});


server.get('/alunos', (req, res) => {
    console.log('minha consulta de alunos');
    res.json(alunos);
})

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
}); 