import React from 'react';
import '../styles/pages/about.scss'; // Estilos para a seção sobre
// import SobreImage from '../assets/sobre-imagem.jpg'; // Substitua pelo caminho da sua imagem

const Sobre = () => {
    return (
        <section id="sobre" className="sobre">
            <div className="sobre-container">
                <div className="content">
                    <h2>Sobre nós</h2>
                    <p>
                        Somos uma equipe dedicada ao bem-estar e cuidado do seu pet. Oferecemos serviços de
                        alta qualidade, focados no conforto e na segurança do seu amigo de quatro patas.
                        Nosso objetivo é proporcionar uma experiência única para o seu pet e para você.
                    </p>
                </div>
                <div className="image">
                    <img src="https://via.placeholder.com/600" alt="about" />
                </div>
            </div>
        </section>
    );
};

export default Sobre;
