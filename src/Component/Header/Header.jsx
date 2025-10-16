import React from 'react';
import bg from '../../assets/header_img.png';
import './Header.css';

const Header = () => (
  <div
    className="header"
    style={{ background: `url(${bg}) center/cover no-repeat` }}
  >
    <div className="header-contents">
      <h2>Order your favourite food from here</h2>
      <p>Choose your favourite food from a wide range of restaurants…</p>
      <button>View Menu</button>
    </div>
  </div>
);

export default Header;