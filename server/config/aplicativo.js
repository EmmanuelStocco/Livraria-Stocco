const express = require('express')
const consign = require('consign')
server = express();

//definição da porta 
server.set('porta', 3011)
server.set('url', 'http://localhost:')


consign({cwd: 'api'})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(server)
;

module.exports = server