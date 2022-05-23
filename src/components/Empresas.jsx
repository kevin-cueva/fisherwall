import React from 'react';
import "./Empresas.css"
import Navbar from './Navbar';
const Empresas= ()=>{
  return(
    <>
    <div>
      <Navbar></Navbar>
      <div className="container-info-empresas">
        <div className="cart-empresas"><p>Capacitacion en prevecion de phishing y seguimiento de correos sospechosos</p></div>
        <div className="cart-empresas"><p>Desarrollo personalizado de politicas de seguridad informatica acorde al estandar ISO 27001 y orientacion en su implementacion exitosa</p></div>
      </div>
    </div>

    </>

  );
}
export default Empresas;
