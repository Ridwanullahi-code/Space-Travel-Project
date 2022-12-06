import React, { useState } from 'react';
import Logo from './Logo';
import Burger from './Burger';
import Menu from './Menu';

import '../../style/navbar.css';

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <nav className="nav-container">
      <Logo />
      <div className="menu">
        <Menu isMobile={mobile} func={() => setMobile(false)} />
        <Burger isMobile={mobile} func={() => setMobile(!mobile)} />
      </div>
    </nav>
  );
};

export default Navbar;
