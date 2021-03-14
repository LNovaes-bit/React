import React from 'react';
import './style.css';
import excel from './Excel.png';


function Card2 () {
    return(
        <div className ="card-container">
            <h3>EXCEL BÁSICO</h3>
           <img src={excel} className="imagem2" alt="excel"/>
           <p><strong>Carga Horária:</strong> 20 horas</p>
           <p><strong>Valor:</strong> Gratuito</p>
        </div>
    );
}

export default Card2;