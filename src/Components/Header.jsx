import React, { useState } from "react";
import Rodal from "rodal";
import { BiGitBranch, BiPhone } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "../css/Header.css";
import "rodal/lib/rodal.css";
const Header = () => {
  const [modalState, setModalState] = useState(false);

  const toggleState = () => {
    setModalState(!modalState);
  };
  const props = {
    animation: "door",
    width: 280,
    height: 150,
  };

  return (
    <div className="header">
      <div className="nav">
        <li>
          <NavLink to="/Projects" className="link">
            Projects
          </NavLink>
        </li>
        <li>
          <div className="link" onClick={toggleState}>
            Contact
            <Rodal visible={modalState} onClose={toggleState} {...props}>
              <h3>Get in touch</h3>
              <div className="rodal__info">
                <span>
                  <a
                    href="https://github.com/phevenAm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BiGitBranch /> {""}
                    GitHub
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.linkedin.com/in/stephenmissah/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin /> {""}
                    LinkedIn
                  </a>
                </span>
                <span>
                  <a href="tel:+0779000xxxx">
                    <BiPhone /> {""} Mobile
                  </a>
                </span>
              </div>
            </Rodal>

          </div>
        </li>
      </div>
    </div>
  );
};

export default Header;
