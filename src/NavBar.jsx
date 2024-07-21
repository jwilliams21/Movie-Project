import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'bootstrap';
import OscarLogo  from './assets/OscarLogo.png';
import './NavBarStyle.css';

export function NavBar () {

 return ( 
    <>
        <div className="navbar">
            <div className="navlogo">
                <img src={OscarLogo} alt="OscarLogo"/>
            </div>
            <div className="navheader">
                Best Picture
            </div>
            <div className="navheader">
                Best Director
            </div>
            <div className="navheader">
                Best Actor
            </div>
            <div className="navheader">
                Best Actress
            </div>
            <div className="navheader">
                Best Supporting Actor
            </div>
            <div className="navheader">
                Best Supporting Actress
            </div>
        </div>
    </>
 )  
}