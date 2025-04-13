import React from "react";

const Projects = () => {
  return (
    <div id="projects">
      <style jsx>
        {`
          #projects {
            margin: 0 50px;
          }
          #projects h2 {
            color: #7600bc;
            font-size: 50px;
         
          }
          .projects-container {
            display: flex;
            flex-direction: column;

          }
          .project {
            width: 100%;
            
          }
          .project h3 {
            font-size: 25px;
            margin-left: 30px;
          }
          .project li {
            font-size: 20px;
            margin-left: 30px;
            margin-bottom: 30px;
          }
          .project hr {
            border: none;
            height: 2px;
            width: 70%;
            background: linear-gradient(to right,lightgray,gray,lightgray);
            margin: 20px auto;
            border-radius: 1px;
            box-shadow: 0 0 1px black;
          }
        `}
      </style>
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project">
          <h3>Dice Game</h3>
          <li>
            Developed a web-based Dice game with React, having functionalities
            like score reset and Difficulty Level
          </li>
          <hr />
        </div>
        <div className="project">
          <h3>Jokes API</h3>
          <li>
            Developed an API using Node and Express with MongoDB, allowing users
            to retrieve joke based on either Query OR Params. Created API
            documentation with Swagger and AI.
          </li>
          <hr />
        </div>
        <div className="project">
          <h3>To-Do List Application</h3>
          <li>
            Developed a web application using React, that allows users to
            create, update, and delete tasks.
          </li>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Projects;
