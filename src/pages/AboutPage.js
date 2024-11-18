import React from 'react';
import '../styles/pages/about.scss'; // Estilos para a seção sobre
import SobreImage from '../assets/dogblue.jpg';
import Button from '../components/Buttons/Button';
import { FaWhatsapp } from "react-icons/fa";

const Sobre = () => {
    return (
        <section id="sobre" className="sobre">
            <div className="sobre-container">
                <div className="content">
                    <h2>Sobre nós</h2>
                    <p>
                    Fundada em 2018, nossa clínica nasceu com o objetivo inicial de ser um pet shop dedicado aos cuidados essenciais e ao bem-estar dos pets. Em 2020, identificamos uma grande necessidade no mercado por serviços veterinários de qualidade. Foi então que decidimos ampliar nosso foco, migrando para o ramo da saúde animal em geral.
                    Desde essa transição, temos nos dedicado a evoluir continuamente, contando com os melhores profissionais e uma infraestrutura de ponta, sempre com o compromisso de atender a todos com excelência. Nosso objetivo vai além de oferecer cuidados confiáveis e de qualidade: buscamos também fortalecer o vínculo entre tutores e seus animais, proporcionando um atendimento acolhedor e acessível, porque entendemos o quanto esses companheiros são amados.
                    Venha fazer parte da nossa história também, acesse o WhatsApp e agende já seu horário. Será um prazer atender você e o seu melhor amigo!
                    </p>
                    <Button 
                        link="https://wa.me/5511991407988" 
                        text={<FaWhatsapp />}
                    />
                </div>
                <div className="image">
                    <img src={SobreImage} alt="about" />
                </div>
            </div>
        </section>
    );
};

export default Sobre;
