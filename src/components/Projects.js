import React from "react";

const Projects = () => {
  return (
    <div id="projects">
      <style jsx>{`
        #projects {
          margin: 0 50px;
          padding-bottom: 50px;
        }

        #projects h2 {
          color: #7600bc;
          font-size: 50px;
          text-align: center;
          margin-bottom: 20px;
        }

        .projects-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .project {
          background-color:#fcfcfc;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease; /* Adding smooth transition */
        }

        .project:hover {
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2); /* Darker shadow on hover */
          transform: translateY(-5px); /* Slightly lift the project card on hover */
        }

        .project h3 {
          font-size: 30px;
          color: #333;
          margin-bottom: 10px;
          font-weight: bold;
        }

        .project li {
          font-size: 18px;
          color: #555;
          margin-bottom: 10px;
        }

        .project hr {
          border: none;
          height: 2px;
          width: 80%;
          background: linear-gradient(to right, lightgray, gray, lightgray);
          margin: 20px auto;
          border-radius: 1px;
        }

        @media (max-width: 768px) {
          #projects {
            margin: 0 20px;
          }

          #projects h2 {
            font-size: 36px;
          }

          .project {
            padding: 15px;
          }

          .project h3 {
            font-size: 24px;
          }

          .project li {
            font-size: 16px;
          }
        }
      `}</style>

      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project">
          <h3>Dice Game</h3>
          <ul>
            <li>
              Developed a web-based Dice game with React, having functionalities
              like score reset and Difficulty Level.
            </li>
          </ul>
          <hr />
        </div>
        <div className="project">
          <h3>Jokes API</h3>
          <ul>
            <li>
              Developed an API using Node and Express with MongoDB, allowing users
              to retrieve jokes based on either Query or Params. Created API
              documentation with Swagger and AI.
            </li>
          </ul>
          <hr />
        </div>
        <div className="project">
          <h3>To-Do List Application</h3>
          <ul>
            <li>
              Developed a web application using React, that allows users to
              create, update, and delete tasks.
            </li>
          </ul>
          <hr />
        </div>
        <div className="project">
          <h3>Social Media Console Based Application</h3>
          <ul>
            <li>
            Developed a console application using C++, allowing users to 
            signup, login, create posts , and add comments. 
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Projects;
