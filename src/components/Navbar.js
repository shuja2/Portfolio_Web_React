import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="Navbar">
      <style jsx>
        {`
          .Navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: white;
            background-color: #7600bc;
            padding: 15px 50px;
          }
          .Navbar .leftSide,
          .Navbar .rightSide {
            /*padding: 15px;*/
          }
          .Navbar .leftSide{
           /* padding-left: 50px*/
          }
          .leftSide #name {
            font-size: 25px;
            font-weight: 500;
          }
          .leftSide a{
            text-decoration: none;
            color: white;
          }
          .icon {
            margin-right: 10px;
          }
          .icon svg {
            color: white;
            margin: -3px 0px;

          }
          .navigation-section a {
            position: relative;
            text-decoration: none;
            display: inline-block;
            color: lightgray;
            margin: 0px 10px;
            font-weight: 600;
             {
              /* opacity: 0.7; */
            }

             {
              /* padding: 0px 5px; */
            }
          }
          .navigation-section a:hover {
            opacity: 1;
            color: white;
             {
              /* margin: 0px 4px; */
            }
          }
          a::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            border-radius: 20px;
            background-color: currentColor;
            transition: width 0.3s ease, left 0.3s ease;
          }
          a:hover::after {
            width: 100%;
            left: 0;
          }
        `}
      </style>
      <div className="leftSide">
        <div className="info-section">
          <div className="name-section">
            <span id="name">Shuja Ur Rehman</span>
          </div>
          <div id="email-section">
            <span id="mail-icon" className="icon">
              <FaEnvelope />
            </span>
            <a id="email" href="mailto:shuja20123@gmail.com">shuja20123@gmail.com</a>
          </div>
          <div id="phone-section">
            <span id="phone-icon" className="icon">
              <FaPhoneAlt />
            </span>
            <a  href="tel:+92324252534">+92324252534</a>
          </div>
        </div>
      </div>
      <div className="rightSide">
        <div className="navigation-section">
          <a href="#about-me">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#recommendations">Recommendation</a>
          <a href="#contact-us">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
