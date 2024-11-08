import { FaXRay } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa";
import { Ri24HoursLine } from "react-icons/ri";
import React from 'react';
import Card from '../components/Cards/serviceCard';
import { FaDog } from 'react-icons/fa';
import "../styles/pages/servicePage.scss"
const ServicePage = () => {
    return (
        <>        <h2 className="titulo">Nossos Serviços</h2>
            <section className="container">
                <div className="cards-container">
                    <Card
                        icon={<FaDog />}
                        text="Clínica Veterinária"
                        buttonLink="/servicos"
                        buttonText="Ver mais"
                    />
                    <Card
                        icon={<FaBriefcaseMedical />}
                        text="Fármarcia"
                        buttonLink="/hotelzinho"
                        buttonText="Ver Mais"
                    />
                    <Card
                        icon={<FaXRay />}
                        text="Raio-X"
                        buttonLink="/hotelzinho"
                        buttonText="Ver Mais"
                    />
                </div>

            </section></>

    );
};

export default ServicePage;
