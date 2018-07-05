//importar o mongoose para realizar a coneção
const mongoose = require("mongoose");

//garatinha de advertencia
mongoose.Promise = global.Promise

//realizar a conexão e exportar essa conexão
const URLBD = 'mongodb://admin:computa73ns0@ds127851.mlab.com:27851/heroku_w73g6rwf'
//const URLBD = 'mongodb://localhost/todotest'
module.exports =  mongoose.connect(URLBD) 