import React, { useState } from "react";
import { Heading } from "./Styled";
import NewProjectForm from "./NewProjectForm";
import ProjectList from "./ProjectList";
import ProjectData from "./ProjectData";

const App = () => {
  const [projects, setProjects] = useState(ProjectData);

  const handleSubmit = async (e, project) => {
    console.log("Submit");
    e.preventDefault();
    setProjects([project, ...projects]);
  };

  return (
    <div>
      <Heading>Recent Projects</Heading>
      <NewProjectForm handleSubmit={handleSubmit} />
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
