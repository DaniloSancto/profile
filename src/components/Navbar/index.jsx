import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-content">
        <div className="home">
          <div className="logo">
            <a href="/">
              <Link to="/">Danilo Santos</Link>
            </a>
          </div>
          <h2>Desenvolvedor</h2>
        </div>
        <ul className="nav-links">
          <li>
          <Link to="/">Sobre</Link>
          </li>
          <li>
            <Link to="/projects">Projetos</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
