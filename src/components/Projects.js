import React from "react";

const Projects = () => {
  let projects = [
    {
      title: "PharmaVault (Final Year Project)",
      description:
        "Developed a pharmacy management system with role-based access control and inventory tracking.\nManaged the project through a structured Waterfall lifecycle from SRS to deployment.",
      link: "https://pharma-vault-mauve.vercel.app/",
    },
    {
      title: "Dice Game",
      description:
        "Developed a web-based Dice game with React, having functionalities like score reset and Difficulty Level.",
      link: "https://shuja2.github.io/Dice-Game/",
    },
    {
      title: "Jokes API",
      description:
        "Developed an API using Node and Express with MongoDB, allowing users to retrieve jokes based on either Query or Params. Created API documentation with Swagger and AI.",
    },
    {
      title: "To-Do List Application",
      description:
        "Developed a web application using React, that allows users to create, update, and delete tasks.",
    },
    {
      title: "Social Media Console Based Application",
      description:
        "Developed a console application using C++, allowing users to signup, login, create posts , and add comments.",
    },
  ];
  return (
    <div id="projects">
      <style jsx>{`
        a {
          text-decoration: none;
        }
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
          background-color: #fcfcfc;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease; /* Adding smooth transition */
        }

        .project:hover {
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2); /* Darker shadow on hover */
          transform: translateY(
            -5px
          ); /* Slightly lift the project card on hover */
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
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            link={project.link || "#"}
            title={project.title || "Untitled Project"}
            description={project.description || "No description available."}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ link, title, description }) => {
  return (
    <a href={link} target={link !== "#" ? "_blank" : "_self"}>
      <div className="project">
        <h3>{title}</h3>
        <ul>
          {description.split("\n").map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default Projects;
