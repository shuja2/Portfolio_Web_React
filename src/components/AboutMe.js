import React from "react";

const AboutMe = () => {
  return (
    <div className="about-me" id="about-me">
      <style jsx>{`
        .about {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          padding: 40px 50px;
          flex-wrap: wrap;
        }

        .about__image-container {
          flex: 1 1 100px;
          display: flex;
          justify-content: center;
        }

        .about__image {
          width: 100%;
          max-width: 300px;
          height: auto;
          padding-left: 0px;
        }

        .about__content {
          flex: 2;
        }

        .about__title {
          font-size: 48px;
          color: #7600bc;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .about__waving {
          width: 50px;
        }

        .about__description {
          font-size: 20px;
          color: #555;
          text-align: justify;
          line-height: 1.6;
          margin-top: 10px;
        }

        @media (max-width: 768px) {
          .about {
            flex-direction: column;
            text-align: center;
            padding: 20px;
          }

          .about__title {
            font-size: 36px;
            justify-content: center;
          }

          .about__description {
            font-size: 18px;
            text-align: justify;
          }
        }
      `}</style>

      <div className="about__image-container">
        <img src="./3d-man-on-pc.png" alt="Profile" className="about__image" />
      </div>

      <div className="about__content">
        <h1 className="about__title">
          Hi, I'm Shuja Ur Rehman!
          <img src="./waving-hand.png" alt="Waving hand" className="about__waving" />
        </h1>
        <p className="about__description">
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
