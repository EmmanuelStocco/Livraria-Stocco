import React from 'react';
import { useEffect, useState } from 'react'
import './Autores.css'

function Autores() {  

  const [evento, setEnvento] = useState([]); 

  useEffect(()=> {
    fetch('http://localhost:3011/autores/listar')
    .then(response => response.json())
    .then(response => setEnvento(response));
  },[]
  ) 

  return ( 
    
    <div className = "autores">
      <div id="corpo_red">
        <legend> Registros de Autores Cadastrados </legend>
        <table id="tabela" className="table table-hover">
          <thead id="cabecalho_rel">
            <tr style={{textAlign:'left'}}>
              <th scope="col"> Código </th>
              <th scope="col"> Nome do Autor </th>
              <th scope="col"> Apelido </th>
              <th scope="col"> A/I </th>
              <th scope="col"> Sexo </th>
              <th scope="col"> Telefone </th>
              <th scope="col"> E-mail </th>
              <th scope="col"> <a href="/autores/novo" className="btn btn-success btn-block">Novo autor</a> </th>
            </tr>
          </thead>

          <tbody id="corpo_rel">
          {evento.map((item, i)=> 
              <tr style={{textAlign:'left'}}>
                <th scope="row" style={{textAlign: 'center'}}> {item.aut_codigo} </th>
                <td> {item.aut_nome}</td> 
                <td> {item.aut_apelido}</td> 
                <td> {item.aut_ativoInativo}</td> 
                <td> {item.aut_sexo}</td> 
                <td> {item.aut_telefone}</td> 
                <td> {item.aut_email}</td>  

                <td id="editar"> <a className="btn btn-primary btn-block" href={`/autores/editar/${item.aut_codigo}`}> Editar </a></td>
                <td id="editar"> <a className="btn btn-danger btn-block" href={`/autores/ativoInativo/${item.aut_codigo}`}> Inativar </a></td> 
              </tr> 
           )
          }
           </tbody>
          </table>   
        </div>
    </div>  
  );
}

export default Autores; 