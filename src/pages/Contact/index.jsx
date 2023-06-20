import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
import email from "../../assets/images/email.png";
import "./styles.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Estou aberto a propostas.</h1>
      <div className="contact-content">
        <p className="contact-txt">
          Atualmente estou a procura de algum lugar para iniciar minha carreira
          como Desenvolvedor.
        </p>
        <p className="contact-txt">
          Caso esteja interessado em trabalhar comigo, mande uma mensagem, você
          pode se conectar comigo no Linkedin.
        </p>
        <div className="contact-images">
          <a
            className="btn"
            href="https://www.linkedin.com/in/danilo-santos-silva/"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin" />
            <p>Ir para o Linkedin</p>
          </a>
          <p className="contact-txt">
            Se quiser dar uma olhada no que estou desenvolvendo, geralmente
            versiono meus projetos no Github.
          </p>
          <a
            className="btn"
            href="https://github.com/DaniloSancto"
            target="_blank"
          >
            <img src={github} alt="github" />
            <p>Ir para o Github</p>
          </a>
          <div className="or">
            <div className="or-line"></div>
            <p>Ou</p>
            <div className="or-line"></div>
          </div>

          <p className="contact-txt">Você pode me enviar um email:</p>
          <div className="send-email">
            <img src={email} alt="email" />
            <p>danilo.santos0404@hotmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
