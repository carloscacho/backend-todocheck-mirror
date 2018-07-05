//importar o esquema criado no arquivo anterior
const Todo = require('./todo')

//definir os metodos que poderão ser utilizados na API
Todo.methods(['get', 'post', 'put', 'delete'])
//metodo de configuração para evitar problemas
Todo.updateOptions({new: true, runValidators: true})

//exportar a configuração finalizada
module.exports = Todo