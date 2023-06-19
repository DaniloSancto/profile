import { Link, NavLink } from "react-router-dom";
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
        <ul className="main-menu">
          <li>
            <NavLink to="/" activeClassName="active">
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="active">
              Projetos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contato
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
