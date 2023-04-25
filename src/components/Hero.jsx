import React from "react";
import "./Hero.css";
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <nav>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/projects'>Projects</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About me</NavLink>
            </li>
        </ul>
      </nav>
    </div>
  );
};

export default Hero;
