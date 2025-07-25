import projectList from "./../data/Projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="mb-25">
      <h2 className="text-2xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-2 gap-5">
        {projectList.map((project) => (
          <ProjectCard
            key={project.id}
            image={project?.image}
            title={project.title}
            summary={project.summary}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
export default Projects;
