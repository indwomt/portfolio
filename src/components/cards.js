import React from 'react';








export default function Projects(props) {
  return (
    
    <div class="d-flex container">
      {props.projects.map((project) => (
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top project-card" src={process.env.PUBLIC_URL + project.image} alt="Card image cap" />
          <div className="card-body project-card">
            <h5 className="card-title project-card">{project.title}</h5>
            <p className="card-text project-card">{project.description}</p>
            <a href={project.repo} className="btn btn-primary">
              Github Repo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

  
