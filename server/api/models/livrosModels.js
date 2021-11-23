const conexao = require('../../config/conexao.js')

module.exports = {
    getAllLivros,
    getByIdLivros, 
    ativarInativar
}

function getAllLivros(callback){
    conexao.query('select * from livros', callback)
}



function getByIdLivros (id, callback){
    conexao.query('select * from livros WHERE liv_codigo = ' + id, callback)
}
 

function ativarInativar(id, ativo, callback){
    console.log('Livros Ativando/Inativando Registro' + id + " -  Status: " + ativo)

    const m_sql = "update livros set liv_ativoinativo = '" + ativo + "' where edt_codigo = '" + id + "'";

    conexao.query(m_sql, callback)
    console.log('Retornando { M O D E L} Livros Ativados/Inativado Registro ' + id + " - Status: " + ativo)
}

 