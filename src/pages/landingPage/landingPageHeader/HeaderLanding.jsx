import React from 'react';
import { useNavigate } from 'react-router-dom';


import './headerLanding.scss';
const HeaderLanding = () => {

    const navigate = useNavigate();

    const handleContentClick = (url) => {
        navigate(`/${url}`);
        console.log(url);
      };

    return (
        <header>
        <div className="logo">
        <img src="https://www.redeamerica.org/Portals/_default/skins/2023/img/Logo.svg" alt="logo">
        </img>
        </div>
        <nav>
            <ul>
                <li><a href="#">Sobre nosotros</a></li>
                <li><a href="#">Contáctanos</a></li>
            </ul>
        </nav>
        <button onClick={() => handleContentClick('login')}>Iniciar sesión</button>
    </header>
    );
};

export default HeaderLanding;