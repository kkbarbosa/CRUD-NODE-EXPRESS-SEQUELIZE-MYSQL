// const express = require('express');
// const mysql = require('mysql');
// const app = express();

// // Configurar a conexão com o banco de dados MySQL
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'sua_senha',
//     database: 'nome_do_banco'
// });

// db.connect((err) => {
//     if (err) throw err;
//     console.log('Conectado ao MySQL');
// });

// // Definir EJS como mecanismo de visualização
// app.set('view engine', 'ejs');
// app.use(express.static('public'));

// // Rota para exibir o formulário de pesquisa
// app.get('/', (req, res) => {
//     res.render('search');
// });

// // Rota para processar a pesquisa
// app.get('/search', (req, res) => {
//     const searchTerm = req.query.query;
//     const query = `SELECT * FROM livros WHERE titulo LIKE ?`;

//     db.query(query, [`%${searchTerm}%`], (err, results) => {
//         if (err) throw err;
//         res.render('search', { livros: results });
//     });
// });

// // Iniciar o servidor
// app.listen(3000, () => {
//     console.log('Servidor rodando na porta 3000');
// });
