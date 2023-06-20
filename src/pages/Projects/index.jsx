import imagePortifolioProject from "../../assets/images/image-portifolio-project.png";
import ProjectCard from "../../components/ProjectCard";
import "./styles.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-content">
        <div className="wrapper">
          <ProjectCard
            name="Em construção"
            description="..."
            pageUrl=""
            imageUrl={imagePortifolioProject}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
