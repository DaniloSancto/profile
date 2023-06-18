import "./styles.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-content">
        <div className="home">
          <div className="logo">
            <a href="/">
              <p className="logo-text">Danilo Santos</p>
            </a>
          </div>
          <h2>Desenvolvedor</h2>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">Sobre</a>
          </li>
          <li>
            <a href="/">Projetos</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
