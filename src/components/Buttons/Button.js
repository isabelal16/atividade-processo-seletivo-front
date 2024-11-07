import React from 'react';
import '../../../src/styles/components/button.scss'; // Se quiser adicionar um estilo específico ao botão

const Button = ({ link, text }) => {
    return (
        <button href={link} className="button" target="_blank">
            {text}
        </button>
    );
};

export default Button;
