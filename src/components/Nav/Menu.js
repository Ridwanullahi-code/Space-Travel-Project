/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Menu = (props) => {
  const { isMobile, func } = props;

  return (
    <ul
      className={isMobile ? 'nav-link-mobile' : 'nav-links'}
      onClick={func}
    >
      <li className="nav-item">
        <NavLink className="nav-link active" to="/">
          Rocket
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/mission">
          Mission
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/profile">
          Profile
        </NavLink>
      </li>
    </ul>
  );
};

// props validation should be proTypes
Menu.propTypes = {
  isMobile: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
export default Menu;
