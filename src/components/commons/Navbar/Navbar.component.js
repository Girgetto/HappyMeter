import React from 'react';
import projectsJson from './projects.json';
import './x.css';

const renderProjects = (projects, setProject, user) => {
  const x = user.project && user.project.id;
  return (
    projects.map(project => (
      x && project.id === x ?
        <a key={project.id} className="project selected" onClick={() => setProject(project)}>
          {project.name}
        </a>
        :
        <a key={project.id} className="project" onClick={() => setProject(project)}>
          {project.name}
        </a>
    ))
  );
};


const Navbar = ({ className, user, setProject, reset }) => (
  <div className={className}>
    <p className="holi" onClick={() => reset()}>
      Hi {user.name}!
    </p>
    <div className="project_container">{renderProjects(projectsJson, setProject, user)}</div>
  </div>
);

export default Navbar;
