import image from "../../assets/images/picture.png";

import "./styles.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="text-about">
          <h1 className="title">Olá eu sou o Danilo</h1>
          <p>
            Estudo programação desde 2019. Gosto de adquirir conhecimento de
            diversas áreas de TI. Em 2020 me formei no curso técnico de
            informática do SENAI. Tenho alguns projetos de estudo realizado em
            cursos no meu github.
          </p>
        </div>
        <div className="about-image">
          <img className="profile-picture" src={image} alt="" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default About;
