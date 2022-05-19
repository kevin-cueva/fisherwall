import React from 'react';
import './Navbar.css';
const Navbar = ()=>{

  return(
    <>

      <div className="container-navbar">
          <div className="nombre-empresa">Fisherwall</div>
          <div className="elementos-navbar">
              <ul className="ul-navbar">
                <li className="li-navbar">Soluciones</li>
                <li className="li-navbar">¿ Por qué Fisherwall ?</li>
                <li className="li-navbar">Blog</li>
                <li className="li-navbar">Talentos</li>
              </ul>
          </div>
          <div className="contao-navbar">CONTACTENOS</div>
      </div>

    </>
  );
}

export default Navbar;
