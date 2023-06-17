import "./styles.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-content">
        <div className="home">
          <div className="logo">
            <a href="/">
              <p>Danilo Santos</p>
            </a>
          </div>
          <h2>Desenvolvedor Fullstack</h2>
        </div>

        <div className="nav-links">
          <a href="/">Sobre</a>
          <a href="/">Projetos</a>
          <a href="/">Contato</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
