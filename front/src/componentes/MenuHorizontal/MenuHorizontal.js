import React from 'react'
import {Link} from 'react-router-dom';

import './MenuHorizontal.css'

export default function MenuHorizontal() {
  return ( 
    <div className = "menuHorizontal">
        <nav className="navMenu">
          <ul>
              <li> <Link to="/"> Inicio </Link></li>
              <li> <Link to="/autores"> Autores </Link></li>
              <li> <Link to="/editoras"> Editoras </Link></li>
              <li> <Link to="/livros"> Livros </Link></li>
              <li> <Link to="/usuarios"> Usuarios </Link></li>
              <li> <Link to="/configurações"> configurações </Link></li>
          </ul>
        </nav>
    </div>
  );
}