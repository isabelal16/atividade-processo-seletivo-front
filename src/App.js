import React from 'react';
import Header from './components/Header.js';
import ServicePage from '../src/pages/servicePage.js';
import HomePage from '../src/pages/HomePage.js';
import Sobre from '../src/pages/AboutPage.js';
import './styles/body.scss';

function App() {
  return (
    <>
      <Header />
      <section id="home" className="section">
        <HomePage />
      </section>
      <section id="sobre" className="section">
        <Sobre />
      </section>
      <section id="servicos" className="section">
        <ServicePage />
      </section>
    </>
  );
}

export default App;
