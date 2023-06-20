import picture from "../../assets/images/picture.png";
import "./styles.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-content">
          <div className="description">
            <h1 className="title">Oi, eu sou o Danilo!</h1>
            <p>
              Em 2019, comecei o curso de Desenvolvimento de Sistemas no SENAI,
              onde aprendi mais sobre o mundo da programação e me apaixonei pela
              área.
            </p>
            <br />
            <p>
              Atualmente, estou focado em Java, no ecossistema Spring, também
              estudo outras tecnologias como PostgreSQL, Git, HTML/CSS,
              JavaScript, ReactJS. Estou animado para explorar oportunidades de
              trabalho na área de desenvolvimento de sistemas e colaborar com
              equipes criativas e motivadas.
            </p>
          </div>
          <div className="about-image">
            <img className="profile-picture" src={picture} alt="" />
          </div>
        </div>

        <div className="other-content">
          <div className="education">
            <h2>Formação</h2>
            <br />
            <div className="formation">
              <div className="line"></div>
              <div className="boll"></div>
              <div className="formation-text">
                <h3>Graduação em analise e desenvolvimento de sistemas</h3>
                <h4>Unicesumar - Pinhais, PR</h4>
                <h5>Out 2022 - Atual</h5>
              </div>
            </div>
            <br />
            <div className="formation">
              <div className="line"></div>
              <div className="boll"></div>
              <div className="formation-text">
                <h3>Técnico em desenvolvimento de Sistemas</h3>
                <h4>Senai - Pinhais, PR</h4>
                <h5>Jun 2019 - Dez 2020</h5>
              </div>
            </div>
            <br />
            <br />
            <h2>Cursos</h2>
            <br />
            <div className="formation">
              <div className="line"></div>
              <div className="boll"></div>
              <div className="formation-text">
                <h3>
                  Java COMPLETO 2023 Programação Orientada a Objetos +Projetos
                </h3>
                <h4>Udemy</h4>
                <h5>Abril 2023</h5>
              </div>
            </div>
            <br />
          </div>
          <div className="language">
            <h2>Idiomas</h2>
            <br />
            <h3>Português</h3>
            <h4>Nativo</h4>
            <br />
            <h3>Inglês</h3>
            <h4>Intermediário</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
