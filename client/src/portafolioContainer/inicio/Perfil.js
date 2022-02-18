import React from "react";
import Typical from "react-typical";
import './perfil.css';

const Perfil = () => {
  return (
    <div className="contenedor-perfil">
      <div className="perfil-padre">
        <div className="detalle-perfil">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100008185052677">
                <i class="fab fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/?hl=es-la">
                <i class="fab fa-instagram-square"></i>
              </a>
              <a href="https://github.com/josenoboa1992?tab=repositories">
                <i class="fab fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/jose-enrique-noboa-9a89a8110/">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="perfil-detalles-nombre">
            <span className="texto-primario">
              {" "}
              Hola, Yo Soy <span className="texto-suave">Jose Noboa</span>
            </span>
          </div>

          <div className="detalles-role">
            <span className="texto-primario">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Desarrollador Entusiasta 🔴",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                    "MERN Stack Developer 😎",
                    1000,
                    "Multiplataforma 📱",
                    1000,
                    "React/Node js Dev ",
                    1000,
                  ]}
                />
              </h1>
              <span className="perfil-eslogan">
                <p>
                  habilidad para crear aplicaciones con operaciones de front-end
                  y back-end
                </p>
              </span>
            </span>
          </div>
          <div className="perfil-option">
            <button className="btn primary-btn">
              {""}
              Contratame{" "}
            </button>
            <a href="" download="">
              <button className="btn highlighted-btn">Curriculum</button>
            </a>
          </div>
        </div>

        <div className="perfil-picture">
          <div className="perfil-picture-background"></div>
        </div>
      </div>
    </div>
  );
};
export default Perfil;
