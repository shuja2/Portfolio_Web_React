import React from "react";

const Skills = () => {
  return (
    <div id="skills">
      <style jsx>
        {`
          #skills {
            margin-left: 50px;
          }
          #skills h2 {
            color: #7600bc;
            font-size: 50px;
             {
              /* margin: 30px; */
            }
          }
          #skills-container {
            display: flex;
            flex-direction: row;
            flex-flow: wrap;
          }
          .skill {
            border: 1px solid gray;
            display: block;
            border-radius: 6px;
            text-align: center;
            margin: 0px 100px 100px 0px;
            padding: 10px;
            width: 2in;
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
        <div class="skill">
          <img src="./html5.png" />
          <h6>HTML</h6>
          <p>3 years experience</p>
        </div>

        <div class="skill">
          <img src="./CSS3.png" />
          <h6>CSS</h6>
          <p>3 years experience</p>
        </div>

        <div class="skill">
          <img src="./js.jpeg" />
          <h6>JavaScript</h6>
          <p>3 years experience</p>
        </div>

        <div class="skill">
          <img src="./react.png" />
          <h6>React</h6>
          <p>2 years experience</p>
        </div>
        <div class="skill">
          <img src="./node.png" />
          <h6>Node.js</h6>
          <p>2 years experience</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
