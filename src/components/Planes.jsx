import React from 'react';
import "./Planes.css"
const Planes = ()=>{
  const planes = [
    {'nombre':'Basico',
     'descripcion':'descripcion del plan basico',
     'valor':'5 $'},
     {'nombre':'Intermedio',
      'descripcion':'descripcion del plan Intermedio',
      'valor':'10 $'},
     {'nombre':'Premiun',
      'descripcion':'descripcion del plan Premiun',
      'valor':'15 $'},
     {'nombre':'Empresarial',
      'descripcion':'descripcion del plan Empresarial',
      'valor':'A convenir $'},
  ]

  return(
    <>
      <div className="container-planes">
          {planes.map((item) =>
            <>
                <div className="card">
                  <div className="nombre">{item.nombre}</div>
                  <div className="descripcion">{item.descripcion}</div>
                  <div className="valor">{item.valor}</div>
                </div>
            </>
          )}
      </div>
    </>
  );
}

export default Planes;
