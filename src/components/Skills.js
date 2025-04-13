import React from "react";

const Skills = () => {
  return (
    <div id="skills">
      <style jsx>
        {`
          #skills {
            margin: 0px 50px;
          }
          #skills h2 {
            color: #7600bc;
            font-size: 50px;
          }
          #skills-container {
            gap: 30px;
            display: flex;
            flex-direction: row;
            flex-flow: wrap;
            justify-content: space-between;
            /* padding-right: 50px; */
            padding-bottom: 30px;
          }
          .skill {
            border: 1px solid gray;
            display: block;
            border-radius: 6px;
            text-align: center;
            padding: 30px;
            /* width: 2in; */
            font-size: 20px;
            box-shadow: 0 3px 10px gray;
          }

          .skill img {
            height: 60px;
            align-items: center;
          }
          .skill h6 {
            align-items: center;
            font-size: 20px;
            margin-block-start: 8px;
            margin-block-end: 5px;
            font-weight: bold;
          }

          .skill p {
            align-items: center;
            font-size: 15px;
            color: gray;
            margin-block-start: 5px;
            margin-block-end: 5px;
          }
        `}
      </style>
      <h2>Skills</h2>
      <div id="skills-container">
        <div className="skill">
          <img src="./html5.png" alt="" />
          <h6>HTML</h6>
          <p>3 years experience</p>
        </div>

        <div className="skill">
          <img src="./CSS3.png" alt=""/>
          <h6>CSS</h6>
          <p>3 years experience</p>
        </div>

        <div className="skill">
          <img src="./js.jpeg" alt=""/>
          <h6>JavaScript</h6>
          <p>3 years experience</p>
        </div>

        <div className="skill">
          <img src="./react.png" alt=""/>
          <h6>React</h6>
          <p>2 years experience</p>
        </div>
        <div className="skill">
          <img src="./node.png" alt=""/>
          <h6>Node.js</h6>
          <p>2 years experience</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
