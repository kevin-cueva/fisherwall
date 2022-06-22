import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../media/menu-outline.svg';
import './NavbarCel.css'
const NavbarCel = ()=>{
  const [mostrar, setMostrar] = useState('no-mostrar-menu');

  const cambiarEstado = () =>{
      if(mostrar ==='no-mostrar-menu'){
        setMostrar('mostrar-menu');
      }else{
        setMostrar('no-mostrar-menu');
      }
  }
  return(
    <>
      <div className="container-navbar">
        <div className="nombre-empresa"><Link to="/fisherwall">Fisherwall</Link></div>
        <div className="icono-menu">
          <img alt="" src={Logo} id="icono-menu" onClick={cambiarEstado}></img>
        </div>
      </div>

       <div className="contenido-menu" id="menu">
          <ul className={mostrar}>
          <li className="li-navbar"><Link to="/fisherwall/personas">Personas</Link></li><hr></hr>
          <li className="li-navbar"><Link to="/fisherwall/empresas">Empresas</Link></li><hr></hr>
          </ul>
       </div>
    </>
  );
}

export default NavbarCel;