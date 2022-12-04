import React from 'react';
import PropTypes from 'prop-types';

const Burger = (props) => {
  const { isMobile, func } = props;
  return (
    <button
      type="button"
      className="mobile-menu-icon"
      onClick={func}
    >
      {isMobile ? <i className="fa fa-times" />
        : <i className="fa-solid fa-bars" />}
    </button>
  );
};

// props validation should be proTypes
Burger.propTypes = {
  isMobile: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
export default Burger;
