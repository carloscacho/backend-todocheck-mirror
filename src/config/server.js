//Primeiramente importe o express, o bodyparser
const bodyParser = require("body-parser");
const express = require("express");

const cors = require('./cors')

//escolha uma porta e inicie uma istancia do express
const port = 3003
const server = express()

//bodyParser.urlencoded Retorna o middleware que apenas analisa os corpos 
//codificados por url e só consulta as solicitações 
//em que o cabeçalho Content-Type corresponde à opção type.
//que no caso trata-se de um extended
server.use(bodyParser.urlencoded({extended: true}))
//permite que objetos  sejam codificados no formato de URL-enconded,
// permitindo uma experiência semelhante a JSON com codificação de URL

//Retorna o middleware que apenas analisa o json
// e apenas consulta solicitações em que o cabeçalho
// Content-Type corresponde à type options .
//neste caso o type options está vazio
server.use(bodyParser.json())

//utilizar o cors
server.use(cors)

//Inicia um soquete do UNIX e ouve conexões 
// no caminho especificado. Este método é idêntico
// ao http.Server.listen () do Node.
// há dois parametros a porta e uma função de retorno
// quando o servidor tiver execultado ele ira execultar a função
server.listen(port, () => {
    console.log("Servidor execultabdo com sucesso")
})

//construção das rotas

//API Routes
//definição de que todas as rotas devem passar por /api
const router = express.Router()
server.use('/api', router)

//TODO Routes
//definição de todas as rotas para mudança no TODO
//devem passar por /api/todoact
const todoService = require('../api/todo/todoService')
todoService.register(router, '/todoact')
