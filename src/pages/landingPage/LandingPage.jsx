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
        <div className="quienes-somos">
          <div className="texto">
            <h2>Quiénes Somos</h2>
            <p>En RedEAmérica, somos el nexo que conecta el conocimiento entre las principales organizaciones
              empresariales de América Latina.
            </p>
            <p>
              Nuestra misión es impulsar la inversión social privada, fomentar la
              sostenibilidad y contribuir al desarrollo de base en las comunidades de la región.
            </p>
          </div>
          <div className="imagen">
            <img src="../src/assets/img/amigodNaturaleza.jpg" alt="Imagen de Quiénes Somos" />
          </div>
        </div>
        <div className="invitacion">
          <h2>Únete a la Red, Únete a la Transformación</h2>
          <p>Regístrate ahora y sé parte activa de la transformación educativa y social en América Latina. <br />
            Juntos, Hacemos Posible el Cambio en Nuestra Región.
          </p>
          <button onClick={() => handleContentClick('signup')}>Registrarse</button>
        </div>
        <div className="informacion" id="info">
          <div className="imagen">
            <img src="../src/assets/img/compartiendo en la naturaleza.jpg" alt="Imagen de información" />
          </div>
          <div className="texto">
            <h2>Conectando Saberes para un Impacto Duradero</h2>
            <p>Nos enorgullece ofrecer a los miembros de la Red, compuesta por las organizaciones empresariales más influyentes de América Latina, un espacio exclusivo. Aquí, podrán compartir conocimientos prácticos, perspectivas enriquecedoras y experiencias diversas relacionadas con la inversión social privada.</p>
            <p>Facilitamos la co-creación y la colaboración al brindar oportunidades para formar alianzas de alto impacto. Creemos en la fuerza de la colaboración para abordar desafíos complejos y generar soluciones innovadoras que beneficien a nuestras comunidades.</p>
          </div>
        </div>
        <div className="caracteristicas">
          <h2>Características</h2>
          <div className="grid">
            <div className="caracteristica">
              <img src="../src/assets/img/learn.svg" alt="Imagen de Documenta y Aprende" />
              <p>Documenta y Aprende</p>
            </div>
            <div className="caracteristica">
              <img src="../src/assets/img/security.svg" alt="Imagen de Validación Exclusiva" />
              <p>Validación Exclusiva</p>
            </div>
            <div className="caracteristica">
              <img src="../src/assets/img/colaborar.svg" alt="Imagen de Colabora Estratégicamente" />
              <p>Colabora Estratégicamente</p>
            </div>
            <div className="caracteristica">
              <img src="../src/assets/img/contenidos.svg" alt="Imagen de Variedad de Contenidos" />
              <p>Variedad de Contenidos</p>
            </div>
          </div>

        </div>
        <div className="contacto" id='contact'>
          <div className="texto">
            <h2>¡Contáctanos!</h2>
            <p>Estamos emocionados de saber de ti.</p>
            <p>Si tienes alguna pregunta, comentario o simplemente deseas conectarte con nosotros, completa el formulario a continuación.</p>
            <p>Estamos aquí para ayudarte y colaborar contigo en la transformación educativa.</p>
          </div>
          <div className="formulario">
            <form>
              <div className="input-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" placeholder="Andres Briñez" required />
              </div>
              <div className="input-group">
                <label htmlFor="correo">Correo Electrónico</label>
                <input type="email" id="correo" name="correo" placeholder="brinezlopez08@gmail.com" required />
              </div>
              <div className="input-group">
                <label htmlFor="motivo">Motivo del Contacto</label>
                <input type="text" id="motivo" name="motivo" placeholder="Consulta General" required />
              </div>
              <div className="input-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje" placeholder="Hola!!" required></textarea>
              </div>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </main>
      <footer>
        <div className="logo">
            <img src="https://www.redeamerica.org/Portals/_default/skins/2023/img/Logo.svg" alt="Logo"/>
        </div>
        <div className="copyright">
            <p>© 2023 RedEAmérica. Todos los derechos reservados.</p>
        </div>
        <div className="social-media">
            <a href="https://www.instagram.com/redeamerica/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.facebook.com/redeamerica/" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.linkedin.com/company/redeamerica/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:info@redeamerica.org" rel="noreferrer">Email</a>
        </div>
    </footer>
    </div>)
}

export default LandingPage