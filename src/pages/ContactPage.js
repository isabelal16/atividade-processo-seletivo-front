import { IoMdChatboxes } from "react-icons/io";
import React from 'react';
import ContactCard from '../components/Cards/ContactCards.js';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import '../styles/pages/contact.scss';
const ContactSection = () => {
    return (
        <>
            <h2 className="titulo_contato">Nossos Contatos</h2>
            <div className="contact-section">
                <ContactCard
                    title="Endereço"
                    icon={<FaMapMarkerAlt />}
                    text="Av. Elias Yazbek, 606 - Quinhau, <br>Embu das Artes - SP, 06803-000"
                    link="https://maps.app.goo.gl/cDskAwJefge4HeLQA"
                    
                />
                <ContactCard
                    title="Contatos"
                    icon={<FaPhoneAlt />}
                    text="WhatsApp: (11) 9088-8769<br>Telefone: (11) 9088-8769"
                    link="https://wa.me/5511991407988" 
                />

                <ContactCard
                    title="Horário de Funcionamento"
                    icon={<FaClock />}
                    text="Segunda à Sexta: 9h às 18h<br>Finais de Semana: 9h às 15h"
                />
                <ContactCard
                    title="Contatos Sociais"
                    icon={<IoMdChatboxes />}
                    text="@clinicaveterinaria.vidaanimal <br> vidaanimal@gmail.com"
                    link="https://www.instagram.com/fly.vet/"
                />
            </div>
        </>

    );
};

export default ContactSection;
