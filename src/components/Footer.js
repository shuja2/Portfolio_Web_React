import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <style>{`
        .footer {
          background-color: #1a1a1a;
          color: #f0f0f0;
          padding: 40px 20px 20px;
          font-family: "Segoe UI", sans-serif;
        }

        .footer-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 40px;
          max-width: 1200px;
          margin: auto;
        }

        .footer-left,
        .footer-middle,
        .footer-right {
          flex: 1;
          min-width: 250px;
        }

        .footer-left h2 {
          margin-bottom: 10px;
          color: #ffffff;
        }

        .footer-left p {
          font-size: 14px;
          color: #cccccc;
        }

        .footer-middle .footer-links {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 8px;
        }

        .footer-middle .footer-links a {
          color: #cccccc;
          text-decoration: none;
          transition: color 0.3s;
          font-size: 14px;
        }

        .footer-middle .footer-links a:hover {
          color: #ffffff;
        }

        .footer-right p {
          margin-bottom: 10px;
        }

        .social-icons a {
          display: inline-block;
          margin-right: 10px;
          color: #cccccc;
          text-decoration: none;
          transition: color 0.3s;
          font-size: 14px;
        }

        .social-icons a:hover {
          color: #ffffff;
        }

        .footer-bottom {
          text-align: center;
          margin-top: 30px;
          font-size: 12px;
          color: #888888;
        }

        /* Responsive tweaks */
        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }

          .footer-middle .footer-links {
            grid-template-columns: repeat(2, minmax(100px, 1fr));
          }

          .footer-left, .footer-middle, .footer-right {
            margin-bottom: 20px;
          }

          .social-icons a {
            margin: 0 5px;
          }
        }
      `}</style>

      <div className="footer-container">
        <div className="footer-left">
          <h2>Shuja Ur Rehman</h2>
          <p>Full-Stack Developer | Creative Thinker | Problem Solver</p>
        </div>

        <div className="footer-middle">
          <ul className="footer-links">
            <li><a href="#about-me">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#recommendations">Reviews</a></li>
            <li><a href="#contact-us">Contact</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <p>Connect with me</p>
          <div className="social-icons">
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:your@email.com">Email</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&#169; 2025 Shuja Ur Rehman. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
