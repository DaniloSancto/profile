import picture from "../../assets/images/picture.png";
import "./styles.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-content">
          <div className="description">
            <h1 className="title">Olá eu sou o Danilo</h1>
            <p>
              Estudo programação desde 2019. Gosto de adquirir conhecimento de
              diversas áreas de TI. Em 2020 me formei no curso técnico de
              informática do SENAI. Tenho alguns projetos de estudo realizado em
              cursos no meu github.
            </p>
          </div>
          <div className="about-image">
            <img className="profile-picture" src={picture} alt="" />
          </div>
        </div>

        <div className="other-content">
          <div className="education">
            <h1>Formação</h1>
            <br />
            <p>Graduação em analise e desenvolvimento de sistemas</p>
            <p>Unicesumar - Pinhais, PR</p>
            <p>2022 - Atual</p>
            <br />
            <p>Técnico em desenvolvimento de Sistemas</p>
            <p>Senai - Pinhais, PR</p>
            <p>2019 - 2020</p>
            <br />
            <h1>Cursos</h1>
            <p>
              Java COMPLETO 2023 Programação Orientada a Objetos +Projetos Udemy
            </p>
            <p>2023</p>
          </div>
          <div className="language">
            <h1>Idiomas</h1>
            <br />
            <p>Português</p>
            <p>Nativo</p>
            <br />
            <p>Inglês</p>
            <p>Intermediário</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
