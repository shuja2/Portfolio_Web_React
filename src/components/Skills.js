import React, { useState } from "react";

const Skills = () => {
  const [skills] = useState([
    { id: 1, name: "HTML", experience: "2 years experience", icon: "./html5.png" },
    { id: 2, name: "CSS", experience: "2 years experience", icon: "./CSS3.png" },
    { id: 3, name: "JavaScript", experience: "2 years experience", icon: "./js.jpeg" },
    { id: 4, name: "React", experience: "1 year experience", icon: "./react.png" },
    { id: 5, name: "Node.js", experience: "1 year experience", icon: "./node.png" },
    { id: 6, name: "C++", experience: "3 year experience", icon: "./cpp.png" },
  ]);

  return (
    <div className="skills" id="skills">
      <style jsx>{`
        .skills {
          padding: 40px 50px;
        }

        .skills__heading {
          color: #7600bc;
          font-size: 48px;
          margin-bottom: 30px;
          text-align: center;
        }

        .skills__container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
        }

        .skill__card {
          background-color: white;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: 0.3s ease all;
        }

        .skill__card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .skill__icon {
          height: 60px;
          width: 60px;
          object-fit: contain;
          margin-bottom: 10px;
        }

        .skill__title {
          font-size: 20px;
          font-weight: bold;
          color: #333;
          margin: 0;
          text-align: center;
        }

        .skill__experience {
          font-size: 14px;
          color: gray;
          margin-top: 5px;
        }

        @media (max-width: 768px) {
          .skills {
            padding: 30px 20px;
          }

          .skills__heading {
            font-size: 36px;
            text-align: center;
          }

          .skills__container {
            display: flex;
            flex-wrap: wrap;

            gap: 20px;
          }

          .skill__card {
            flex-direction: row;
            align-items: center;
            padding: 15px;
            flex-grow: 1;
          }

          .skill__icon {
            height: 50px;
            width: 50px;
            margin-bottom: 0;
            margin-right: 15px;
          }

          .skill__info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .skill__title {
            font-size: 18px;
          }

          .skill__experience {
            font-size: 13px;
            color: #888;
          }
        }
      `}</style>

      <h2 className="skills__heading">Skills</h2>

      <div className="skills__container">
        {skills.map((skill) => (
          <div key={skill.id} className="skill__card">
            <img src={skill.icon} alt={skill.name} className="skill__icon" />
            <div className="skill__info">
              <h6 className="skill__title">{skill.name}</h6>
              <p className="skill__experience">{skill.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
