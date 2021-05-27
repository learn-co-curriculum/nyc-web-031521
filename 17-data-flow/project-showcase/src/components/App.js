import React, { useState } from "react";
import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

// TODO: replace this with a fetch request (eventually)
// import projectData from "../data/projects";

function App() {
  // placeholder text! loading indicator
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  function handleFetchProjects() {
    fetch("http://localhost:4000/projects")
      .then((r) => r.json())
      .then((projectArray) => {
        // update state (change the projects variable)
        // re-render this component - App()
        setProjects(projectArray);
      });
  }

  function handleToggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header
        onToggleDarkMode={handleToggleDarkMode}
        isDarkMode={isDarkMode}
        title="Flatiron Projects"
        logo="//"
      />
      <ProjectForm />
      <button onClick={handleFetchProjects}>Fetch Projects</button>
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
