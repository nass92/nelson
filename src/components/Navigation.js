import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {


  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" exact activeClassName="nav-active" className="hover">
          <li>accueil</li>
        </NavLink>

        <li className="nav-portfolio">Arts
          <ul className="nav-projects">
            <NavLink to="/projet/1" activeClassName="nav-active" className="hover">
              <li>Painting One</li>
            </NavLink>
            <NavLink to="/projet/2" activeClassName="nav-active" className="hover">
              <li>Painting Two</li>
            </NavLink>
            <NavLink to="/projet/3" activeClassName="nav-active" className="hover">
              <li>Painting Three</li>
            </NavLink>
            <NavLink to="/projet/4" activeClassName="nav-active" className="hover">
              <li>Painting Four</li>
            </NavLink>
          </ul>
        </li>

        <li className="nav-portfolio">NFT
        <ul className="nav-projects">
        <NavLink to="/create" activeClassName="nav-active" className="hover">
          <li>Create</li>
        </NavLink>
        <NavLink to="/expo/0" activeClassName="nav-active" className="hover">
          <li>Exposition</li>
        </NavLink>
        </ul>
        </li>
        <NavLink to="/contact" activeClassName="nav-active" className="hover">
          <li>contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;