import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarCompleto from './NavbarCompleto';
import NavbarCel from './NavbarCel';
import './Navbar.css';
const Navbar = ()=>{
const [tamPantallaUse, setTamPantallaUse] = useState(document.documentElement.clientWidth);
//Funcion para obtener el tamaño de la pantalla
const tamPantalla = ()=>{
  //evento que se activa si la pantalla cambia de tamaño
  window.onresize = function (){
        // Obtenemos la posicion del scroll en pantall
        setTamPantallaUse(document.documentElement.clientWidth);
    }
    return scroll;
}


  return(
    <>
      {tamPantalla()}
      {tamPantallaUse>900 ?  <NavbarCompleto></NavbarCompleto>:<NavbarCel></NavbarCel>}

    </>
  );
}

export default Navbar;
