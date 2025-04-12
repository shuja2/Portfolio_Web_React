import React from "react";

const AboutMe = () => {
  return (
    <div id="about-me">
      <style jsx>
        {`
          #about-me {
            display: flex;
          }
          #profile_image {
            width: 300px;
            /* height: 250px; */
            vertical-align: middle;
            padding: 1.2cm;
          }
          #waving-hand {
            width: 60px;
            margin-left: 10px;
          }
          .prf-about-section h1 {
            font-size: 65px;
            margin-top: 90px;
            color: #7600bc;
          }
          .prf-about-section p {
            font-size: 25px;
            color: #808080;
            margin-top: -1cm;
          }
        `}
      </style>
      <div className="prf-img-section">
        <img src="./3d-man-on-pc.png" alt="" id="profile_image" />
      </div>
      <div className="prf-about-section">
        <h1>
          Hi, I'm Shuja Ur Rehman!
          <img src="./waving-hand.png" alt="" id="waving-hand" />
        </h1>
        <p>
          I am an aspiring full stack developer currently pursuing a Bachelor's
          in Software Engineering. I have completed the IBM Full Stack
          JavaScript Developer professional certificate on Coursera, which
          equipped me with skills in both frontend and backend technologies.
          While I haven't worked professionally in a full stack role yet, I have
          built several practice projects on my own to apply and enhance my
          learning. I'm passionate about building modern web applications and
          continuously improving my development skills.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
