const models = require('../models/editorasModels')

module.exports = {
    editorasMenu,
    editorasGetAll,
    editorasGetById,
    editorasAtivoInativo
}

function editorasMenu(req, res){
    res.json('Rota editoras  encontrada ')
    console.log('rota editoras encontrada')
}

function editorasGetAll(req, res){
//   res.json('Rota autores listar encontrada ')
    console.log('rota editoras listar encontrada')
    models.getAllEditoras(function(err, resposta){
        console.log('Retorno de editoras {M O D E L} ', resposta)
        if(err){
            throw err
        }else{
            res.json(resposta)
        }
    })
}


function editorasGetById(req, res){
   const id = req.params.codigo
   console.log('Parametro Esperado: ' + id)
   models.getByIdEditoras(id, function(err, resposta){
            console.log('Retorno de editoras {M O D E L} ', resposta)
            if(err){
                throw err
            }else{
                res.json(resposta)
            }
        })
    }

function editorasAtivoInativo (req, res){
        const id = req.params.codigo
        res.json('Ativar/Inativar Editoras { M O D E L }')
        console.log('Ativar/Inativar Editoras { M O D E L }')
        console.log('Parametro Esperado: ' + id)
        //buscar extrarir o regristro do ID
        models.getByIdEditoras(id, function(err, resposta){
                console.log('Retorno de Editoras {M O D E L} ', resposta)
                let p_ativo = resposta[0].edt_ativoinativo
                    if(err){
                        throw err
                    }else{
                        if(p_ativo == 'A'){
                            p_ativo = 'I'
                        }else{
                            p_ativo = 'A'
                        }
                    }
                    console.log('A/I' + p_ativo)
                    models.ativarInativar(id, p_ativo, function(err, result){
               //trocar o status de ativo e inativo do registro posicionado
                        if(err){
                            throw err
                        }
                        console.log("Registro Atualizado")
                       // res.redirect('/editoras/consultar' + id)
                    })
    
                })
        
        }
    
