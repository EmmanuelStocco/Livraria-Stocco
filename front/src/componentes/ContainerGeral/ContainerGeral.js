import React from 'react';
import ContainerSuperior from '../ContainerSuperior/ContainerSuperior';
import MenuBotoes from '../MenuBotoes/MenuBotoes';

import './ContainerGeral.css';

function ContainerGeral() {
  return ( 
    <div className = "geral">
     <ContainerSuperior />
     <MenuBotoes />
    </div>
  );
}

export default ContainerGeral;
