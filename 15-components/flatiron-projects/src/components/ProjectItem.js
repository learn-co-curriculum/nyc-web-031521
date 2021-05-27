function ProjectItem({ name, phase, image }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{phase}</h2>
      <img src={image} alt={name} />
    </div>
  );
}

export default ProjectItem;
