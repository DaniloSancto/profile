import { Link } from "react-router-dom";
import "./styles.css";

const Project = ({ name, description, pageUrl, imageUrl }) => {
  return (
    <Link to={`/projects/${pageUrl}`}>
      <div className="project-card">
        <img src={imageUrl} alt={pageUrl} />
        <div className="card-content">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Project;
