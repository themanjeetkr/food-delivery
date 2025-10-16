import React, { useState } from 'react';
import { assets } from '../../assets/assets'; // if using index.js as shown above
import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = ({setshowlogin}) => {
  const [menu, setMenu] = useState('menu')
  return (
    <div className="navbar">
      <Link to='./'><img src={assets.logo} alt="Logo " className='logo' /></Link>
      
      <ul className='nav-menu'>
       
          <li
            onClick={() => setMenu('home')}
            className={menu === 'home' ? 'active' : ''}
          >
            Home
          </li>

          <li
            onClick={() => setMenu('menu')}
            className={menu === 'menu' ? 'active' : ''}
          >
            Menu
          </li>

          <li
            onClick={() => setMenu('mobile-app')}
            className={menu === 'mobile-app' ? 'active' : ''}
          >
            Mobile App
          </li>

          <li
            onClick={() => setMenu('contact')}
            className={menu === 'contact' ? 'active' : ''}
          >
            Contact
          </li>
        </ul>

  
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          
          <div className="dot"></div>
        </div>
        <button onClick={()=>setshowlogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
