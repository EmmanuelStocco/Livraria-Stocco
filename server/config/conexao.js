const mysql = require('mysql2')
const database = 'dados212d' //nome do banco de dados 

//instanciar objeto de acesso ao banco de dados 

const conexao = mysql.createConnection({
    user: 'root',
    password: 'tatakaetatakae',
    host: 'localhost',
    port: 3306
})

conexao.connect((err)=> {
    if(err){
        console.log('erro ao conectar no mysql' , err)
        return 
    }
    conexao.query('USE ' + database)
    console.log('\nConexão estabilizada com suceso!!!!')
})

module.exports = conexao