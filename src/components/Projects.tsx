import { motion } from "framer-motion";
import projectList from "./../data/Projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <section className="mb-25 scroll-mt-[150px]" id="Projects">
        <h2 className="text-2xl font-bold mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
    </motion.div>
  );
};
export default Projects;
