const modelsIndex = require('../models/indexModels.js')

module.exports = {
    indexControllers, 
   // notFoundControllers

}

function indexControllers(req, res){
    res.json('Rota raiz encontrada ')
    console.log('rota raiz encontrada')
}

/*
function notFoundControllers(req, res){
    res.json('Rota inexistente 404 ')
    console.log('Rota inexistente')
}

*/