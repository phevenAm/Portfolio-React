import React from "react";
import Rodal from "rodal";
import { NavLink } from "react-router-dom";
import "../Component Styles/Header/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <li>
          <NavLink to="/Projects" activeClassName="is-active" className="link">
            Projects
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/Contact" activeClassName="is-active" className="link">
            Contact
          </NavLink>
        </li> */}
      </div>
    </div>
  );
};

export default Header;
