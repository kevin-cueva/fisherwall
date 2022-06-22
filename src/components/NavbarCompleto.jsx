import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarCompleto.css'
const NavbarCompleto =()=>{
  return(
    <div className="container-navbar container-navbarCompleto">
        <div className="nombre-empresa"><Link to="/fisherwall">Fisherwall</Link></div>
        <div className="elementos-navbar">
            <ul className="ul-navbar">
              <li className="li-navbar">Soluciones</li>
              <li className="li-navbar">¿ Por qué Fisherwall ?</li>
              <li className="li-navbar">Blog</li>
            </ul>
        </div>
        <div className="persona-empresa">
          <ul className="ul-navbar">
            <li className="li-navbar"><Link to="/fisherwall/personas">Personas</Link></li>
            <li className="li-navbar"><Link to="/fisherwall/empresas">Empresas</Link></li>
          </ul>
        </div>
    </div>
  );
}

export default NavbarCompleto;
