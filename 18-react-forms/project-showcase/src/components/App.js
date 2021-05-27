import React, { useState } from "react";
import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";
import {getProjects} from '../api/client'

function App() {
  const arr = useState([]);
  const projects = arr[0]
  const setProjects = arr[1]
  const [isDarkMode, setIsDarkMode] = useState(true);

  function handleFetchProjects() {
    getProjects()
      .then((projectArray) => {
        // update state (change the projects variable)
        // re-render this component - App()
        setProjects(projectArray);
      });
  }

  function handleAddProject(newProject) {
    // update state
    // primitive value (boolean, string, number)
    // replacing state entirely!
    // spread operator: create a new array, copy an old array into it
    // - does that without changing the original array

    // projects.push(newProject);
    // projects =[{}, {}]
    const updatedProjects = [...projects, newProject];
    // console.log(projects);
    setProjects(updatedProjects);
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
      <ProjectForm onAddProject={handleAddProject} />
      <button onClick={handleFetchProjects}>Fetch Projects</button>
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
