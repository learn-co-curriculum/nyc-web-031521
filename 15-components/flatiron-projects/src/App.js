import "./App.css";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <div className="App">
      <Header title="Flatiron Projects" logo={"//"} />
      <ProjectForm />
      <ProjectList />
    </div>
  );
}

export default App;
