import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../image/planet.png';

const Logo = () => (
  <NavLink to="/" className="logo-link">
    <img className="web-logo" src={logo} alt="planet logo" />
    Space Traveler&lsquo;sHub
  </NavLink>
);

export default Logo;
