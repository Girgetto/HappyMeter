import React from 'react';
import projectsJson from './projects.json';

const renderProjects = (projects, setProject) =>
  projects.map(project => (
    <div key={project.id} className="project" onClick={() => setProject(project)}>
      {project.name}
    </div>
  ));

const Navbar = ({ className, user, setProject }) => (
  <div className={className}>
    Hi {user.name}!
    <div className="project_container">{renderProjects(projectsJson, setProject)}</div>
  </div>
);

export default Navbar;
