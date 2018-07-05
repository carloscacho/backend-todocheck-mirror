//import node-restfull para criar esse objeto
//dentro do banco
const restful = require('node-restful')
//é uma forma de requisitar a conexão com o mongo
const mongoose = restful.mongoose

//esse será o esquema do arquivo
const todoSchema = new mongoose.Schema({
    //onde irá conter uma descrição da atividade
    description: {type: String, required: true },
    //um check para verificar se atividade foi realizada
    done: {type: Boolean, required: true, default: false},
    //e data em que atividade foi criada
    createdAt: {type: Date, default: Date.now }
})

//todo esse esquema será criado pelo node restful
module.exports =  restful.model('Todo', todoSchema);
