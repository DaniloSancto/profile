import picture from "../../assets/images/picture.png";
import ProjectCard from "../../components/ProjectCard";
import "./styles.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="wrapper">
        <ProjectCard
          name="Criador de Portifolio"
          description="rsrsrssr"
          pageUrl="portifolio"
          imageUrl={picture}
        />

        <ProjectCard
          name="Criador de Portifolio"
          description="rsrsrssr"
          url="/project-portifolio"
        />

        <ProjectCard
          name="Criador de Portifolio"
          description="rsrsrssr"
          pageUrl="portifolio"
          imageUrl={picture}
        />

        <ProjectCard
          name="Criador de Portifolio"
          description="rsrsrssr"
          pageUrl="portifolio"
          imageUrl={picture}
        />
      </div>
    </div>
  );
};

export default Projects;
