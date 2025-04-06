import React from 'react';
import { Link } from 'react-router-dom';
import "./index.scss";
import logo from "../assets/logo.svg"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-logo'>
          <Link to="/">
            <img src={logo} alt="logo" height={70} />
          </Link>
        </div>
        
        <div className='navbar-menu'>
          <ul>
            <li><Link to="/">Ana Səhifə</Link></li>
            <li><Link to="/haqqimizda">Haqqımızda</Link></li>
            <li><Link to="/layiheler">Layihələr</Link></li>
            <li><Link to="/contact">Əlaqə</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;