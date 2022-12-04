import React, { useState } from 'react';
import Menu from './Menu';

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span
          className={open ? "close" : "bar"}
          onClick={() => setOpen(open)}
        />
        <span className={open ? "close" : "bar"} />
        <span className={open ? "close" : "bar"} />
      </div>
      <Menu classes={open ? "show-nav-items" : "nav-items"} />
    </div>
  );
};

export default Burger;
