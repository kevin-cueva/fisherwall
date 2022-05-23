import React from 'react';
import Planes from './Planes';
import Navbar from './Navbar';
import Presentacion from './Presentacion';
import Informacion from './Informacion';
import Footer from './Footer';
const Home = ()=>{
  return (
    <div>
      <Navbar></Navbar>
      <Presentacion></Presentacion>
      <Informacion></Informacion>
      <Footer></Footer>
    
    </div>
  );
}
export default Home;
