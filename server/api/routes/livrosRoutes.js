const controller = require('../controllers/livrosController')

server.get('/livros', controller.livrosMenu)
 
server.get('/livros/listar', controller.livrosGetAll)
 
server.get('/livros/consultar/:codigo', controller.livrosGetById) 

server.get('/livros/ativoInativo/:codigo', controller.livrosAtivoInativo)