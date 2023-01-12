import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const {name, id, about, technologies} = projects
  console.log(projects);
  let projItems = projects.map((item)=> <ProjectItem key={item.id} name ={item.name} about ={item.about} technologies={item.technologies}/>)
  console.log(projItems)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projItems}
        {/* render ProjectItem components here */}
      </div>
    </div>
  );
}

export default ProjectList;
