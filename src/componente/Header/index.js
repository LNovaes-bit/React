import React from 'react';
import './style.css';
import logo from './senai.png';

function Header() {
    return (
        <header className><h3>Escola SENAI Suiço Brasileira "Paulo Ernesto Tolle"</h3> 
         <p><img src={logo} id="logo" alt="logo"/></p> <br></br>
        </header>
    );
}

export default Header;