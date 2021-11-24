import React from 'react'; 
import {  Switch, Route} from 'react-router-dom'
import './AreaDados.css'

import Autores from '../Autores/Autores'

export default function AreaDados() { 
  return (  
     <div className ="areaDados"> 
        <Switch>
         {/* <Route exact path="/autores" component={Autores}> </Route> */}
         <Route exact path="/autores"> <Autores/></Route>
        </Switch> 
     </div>
       
   ); 
  }