import React from 'react';
import Button from '../Buttons/Button'; // Importando o componente de botão
import '../../../src/styles/components/card.scss'; // Estilos para o Card

const Card = ({ icon, text, buttonLink, buttonText }) => {
    return (
        <div className="card">
            <div className="icon">{icon}</div>
            <p className="text">{text}</p>
            <Button link={buttonLink} text={buttonText} />
        </div>
    );
};

export default Card;
