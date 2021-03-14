import React, { useState } from "react";
import Rodal from "rodal";
import { BiGitBranch, BiPhone, BiMailSend } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "../Component Styles/Header/Header.css";
import "rodal/lib/rodal.css";
const Header = () => {
  const [modalState, setModalState] = useState(false);

  const toggleState = () => {
    setModalState(!modalState);
  };
  const props = {
    animation: "slideDown",
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
          <NavLink to="/" className="link" onClick={toggleState}>
            Contact
            <Rodal visible={modalState} onClose={toggleState} {...props}>
              <h3>Get in touch</h3>
              <span>
                <BiGitBranch /> <a href="">GitHub</a>
              </span>
              <span>
                <AiFillLinkedin /> <a href="">LinkedIn</a>
              </span>
              <span>
                <BiPhone /> <a href="">Mobile</a>
              </span>
            </Rodal>
          </NavLink>
        </li>
      </div>
    </div>
  );
};

export default Header;
