//importar o mongoose para realizar a coneção
const mongoose = require("mongoose");

//garatinha de advertencia
mongoose.Promise = global.Promise

//realizar a conexão e exportar essa conexão
const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://localhost/todotest'
//const URLBD = ''
//const URLBD = 'mongodb://localhost/todotest'
module.exports =  mongoose.connect(url) 