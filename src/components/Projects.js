import React from "react";

const Projects = () => {
  return (
    <div id="projects">
        <style jsx>{`
            #projects{
                margin: 0 50px;
            }
            #projects h2{
                color: #7600bc;
                font-size: 50px;
            }
            `}
        </style>
      <h2>Projects</h2>
            <div className="projects-container">
                <div className="project"></div>
            </div>
    </div>
  );
};

export default Projects;
