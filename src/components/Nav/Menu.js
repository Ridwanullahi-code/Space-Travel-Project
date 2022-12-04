import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Menu = (props) => {
  const { classes } = props;
  return (
    <ul className={classes}>
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
  classes: PropTypes.string.isRequired,

};
export default Menu;
