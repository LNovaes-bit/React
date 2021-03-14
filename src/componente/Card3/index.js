import React from 'react';
import './style.css';
import Civil from './Civil.jpg';


function Card3 () {
    return(
        <div className ="card-container">
            <h3>Construção Civil - Desvendando o BIM</h3>
           <img src={Civil} className="imagem3" alt="Civil"/>
           <p><strong>Carga Horária:</strong> 20 horas</p>
           <p><strong>Valor:</strong> Gratuito</p>
        </div>
    );
}

export default Card3;