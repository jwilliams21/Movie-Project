import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'bootstrap';
import NavBar from './NavBar.jsx';
import EveryoneOscar from './assets/EveryoneOscar.jpg';
import Homepage1 from './assets/Homepage1.webp';
import Homepage2 from './assets/Homepage2.jpg';
import './HomeStyle.css';

function Home() {


  return (
    <>
      <NavBar />
      
      <div></div>

      <body>
        <div>
          <h4><b><u>The Academy</u></b></h4>
          <br/>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
             Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <div className="homepage-image-container"> 
            <img src={EveryoneOscar} alt="EveryoneOscar" className="EveryoneOscar"/>   
            <img src={Homepage1} alt="Homepage1" className="Homepage1" style={{ position: 'relative', zIndex: 1 }}/>   
            <img src={Homepage2} alt="Homepage2" className="Homepage2"/> 
          </div>    
        </div>
      </body>
    </>
  )
}

export default Home
