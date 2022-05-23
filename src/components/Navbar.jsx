import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
const Navbar = ()=>{

  return(
    <>

      <div className="container-navbar">
          <div className="nombre-empresa"><Link to="/fisherwall">Fisherwall</Link></div>
          <div className="elementos-navbar">
              <ul className="ul-navbar">
                <li className="li-navbar">Soluciones</li>
                <li className="li-navbar">¿ Por qué Fisherwall ?</li>
                <li className="li-navbar">Blog</li>
                <li className="li-navbar">Talentos</li>
              </ul>
          </div>
          <div className="persona-empresa">
            <ul className="ul-navbar">
              <li className="li-navbar"><Link to="/fisherwall/personas">Personas</Link></li>
              <li className="li-navbar"><Link to="/fisherwall/empresas">Empresas</Link></li>
            </ul>
          </div>
      </div>

    </>
  );
}

export default Navbar;
