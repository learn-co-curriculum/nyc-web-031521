import ProjectItem from "./ProjectItem";
// TODO: replace this import with a fetch!
import projects from "../data";

function ProjectList() {
  console.log(projects);

  const projectItems = projects.map((project) => {
    return (
      <ProjectItem
        key={project.id}
        name={project.name}
        phase={project.phase}
        image={project.image}
      />
    );
  });

  return (
    <div>
      <h1>ProjectList</h1>
      {projectItems}
    </div>
  );
}

export default ProjectList;
