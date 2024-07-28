import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OscarLogo  from './assets/OscarLogo.png';
import './NavBarStyle.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.jsx'



function NavBar() {

 return ( 
    <>
        <div className="navbar">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="navlogo">
                    <img src={OscarLogo} alt="OscarLogo"/>
                </div> 
            </Link>    
            <Link to="/best-picture" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="navheader">
                    Best Picture
                </div>
            </Link>
            <Link to="/best-director" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="navheader">
                    Best Director
                </div>
            </Link>
            <Link to="/best-actor" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="navheader">
                    Best Actor
                </div>
            </Link>
            <Link to="/best-picture" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="navheader">
                    Best Actress
                </div>
            </Link>
            <Link to="/best-picture" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="navheader">
                    Best Supporting Actor
                </div>
            </Link>
            <Link to="/best-picture" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="navheader">
                    Best Supporting Actress
                </div>
            </Link>
        </div>
    </>
 )  
}

export default NavBar;