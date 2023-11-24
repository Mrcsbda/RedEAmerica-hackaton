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
      <HeaderLanding/>
      <main>
        
      </main>
    </div>
  )
}

export default LandingPage