import express from 'express'; //para o servidor
import dotenv from 'dotenv'; //para variáveis de controle
import mustache from 'mustache-express'; //para a transcrição do html
import path from 'path'; //para as pastas públicas
import mainRoutes from './routes/index' //Importa a rota principal do grupo

dotenv.config();//Inicializa o dotenv

const server = express(); //Inicializa o express server

server.set('view engine', 'mustache'); //Seta a viewegine como sendo a mustache
server.set('views', path.join(__dirname, 'views')); //Irá reunir a direção das views
server.engine('mustache', mustache()); //Inicializa a engine mustache

server.use(express.static(path.join(__dirname, '../public')));//Seta como estático os arquivos na pasta public

server.use(mainRoutes); //Define a rota que o server irá utilizars

//Erro caso o usuário vá para outra página
server.use((req, res)=>{
    res.send('página não encontrada');
});

server.listen(80); //erro utilizando process.env.PORT .env  

