import React from 'react';
import Card from '../components/Cards/serviceCard'; // Importando o componente de Card
import { FaDog } from 'react-icons/fa'; // Usando ícone do react-icons

const ServicePage = () => {
    return (
        <div className="cards-container">
            <Card
                icon={<FaDog />}
                text="Serviço de Banho & Tosa"
                buttonLink="/servicos"
                buttonText="Ver mais"
            />
            <Card
                icon={<FaDog />}
                text="Pet Hotel"
                buttonLink="/hotelzinho"
                buttonText="Veja detalhes"
            />
            <Card
                icon={<FaDog />}
                text="Pet Hotel"
                buttonLink="/hotelzinho"
                buttonText="Veja detalhes"
            />
        </div>
    );
};

export default ServicePage;
