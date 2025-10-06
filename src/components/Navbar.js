import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <style jsx>{`
        .navbar {
          background-color: #7600bc;
          color: white;
          font-family: "Segoe UI", sans-serif;
          padding: 15px 30px;
          position: relative;
          z-index: 999;
        }

        .navbar__top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar__left {
          display: flex;
          flex-direction: column;
        }

        .navbar__name {
          font-size: 24px;
          font-weight: bold;
        }

        .navbar__contact {
          display: flex;
          align-items: center;
          font-size: 14px;
          margin: 3px 0;
        }

        .navbar__contact .icon {
          margin-right: 6px;
        }

        .navbar__contact a {
          color: white;
          text-decoration: none;
        }

        .navbar__hamburger {
          font-size: 24px;
          cursor: pointer;
          display: none;
        }

        .navbar__links {
          display: flex;
          gap: 20px;
          margin-top: 10px;
        }

        .navbar__link {
          color: lightgray;
          text-decoration: none;
          font-weight: 600;
          position: relative;
          padding: 6px 12px;
          border-radius: 6px;
          transition: all 0.3s ease;
        }

        .navbar__link:hover {
          color: white;
          background-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .navbar__mobile-menu {
          display: none;
          flex-direction: column;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.5s ease;
        }

        .navbar__mobile-menu.open {
          display: flex;
          max-height: 500px; /* enough space for links */
        }

        .navbar__mobile-link {
          margin: 8px 0;
          padding: 10px 15px;
          color: white;
          text-decoration: none;
          font-weight: 500;
          border-radius: 6px;
          background-color: #6a00aa;
          transition: transform 0.2s ease, background-color 0.3s ease;
        }

        .navbar__mobile-link:hover {
          background-color: #8900d4;
          transform: translateX(5px);
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .navbar__links {
            display: none;
          }

          .navbar__hamburger {
            display: block;
          }

          .navbar__top {
            flex-direction: row;
            width: 100%;
          }

          .navbar__left {
            gap: 2px;
          }

          .navbar__mobile-menu {
            margin-top: 15px;
          }
        }
      `}</style>

      <div className="navbar__top">
        <div className="navbar__left">
          <div className="navbar__name">Shuja Ur Rehman</div>
          <div className="navbar__contact">
            <span className="icon">
              <FaEnvelope />
            </span>
            <a href="mailto:shuja20123@gmail.com">shuja20123@gmail.com</a>
          </div>
          <div className="navbar__contact">
            <span className="icon">
              <FaPhoneAlt />
            </span>
            <a href="tel:+923234252534">+92 323 4252534</a>
          </div>
        </div>

        <div className="navbar__right">
          <div className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
          <div className="navbar__links">
            <a className="navbar__link" href="#about-me">About</a>
            <a className="navbar__link" href="#skills">Skills</a>
            <a className="navbar__link" href="#projects">Projects</a>
            <a className="navbar__link" href="#recommendations">Reviews</a>
            <a className="navbar__link" href="#contact-us">Contact</a>
          </div>
        </div>
      </div>

      <div className={`navbar__mobile-menu ${menuOpen ? "open" : ""}`}>
        <a className="navbar__mobile-link" href="#about-me">About</a>
        <a className="navbar__mobile-link" href="#skills">Skills</a>
        <a className="navbar__mobile-link" href="#projects">Projects</a>
        <a className="navbar__mobile-link" href="#recommendations">Reviews</a>
        <a className="navbar__mobile-link" href="#contact-us">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
