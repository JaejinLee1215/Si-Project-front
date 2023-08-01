// src/components/navigation/NavBar.js
import React from 'react';
import './NavBar.css';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav-bg-container">
      <div className="content">
        <nav id="primary_nav_wrap">
          <ul>
            <li><Link to="/page1">page1</Link></li>
            <li><Link to="/page2">page2</Link></li>
            <a href='/'>
            <li><HomeIcon fontSize="large" style={{ color: '#6AAF5F' }} /></li>
            </a>
            <li><Link to="/page3">page3</Link></li>
            <li><Link to="/page4">page4</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
