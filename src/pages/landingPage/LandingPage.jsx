import React from 'react'
import { useNavigate } from 'react-router-dom';
import HeaderLanding from './landingPageHeader/headerLanding';

import './landing.scss'


const LandingPage = () => {

  const navigate = useNavigate();

  const handleContentClick = (url) => {
    navigate(`/${url}`);
    console.log(url);
  };

  return (
    <div>
      <HeaderLanding />
      <main>

        <div className="hero">
          <img src="https://redeamerica.org/Portals/0/EasyDNNRotator/7169/lx3zof4l.webp" alt="Imagen de fondo del hero" />
          <div className="hero-text">
            <h2>Bienvenidos a RedEAmérica</h2>
            <p>Descubre, Explora y Comparte la Riqueza del Conocimiento Educativo en RedEAmérica.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LandingPage