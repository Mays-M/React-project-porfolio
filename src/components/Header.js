import React, { memo } from 'react';
import { Link } from 'react-router-dom';


import './Header.css';

function HomeNavbar() {
  return (
    <div className="navigation-header">
      <nav role="navigation">
        <div className="desktop-menu">
          <ul className="desktop-menu-links">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/Hire">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

function Header() {
  const My_Name = (
    <h1 className='header-name'>Mays AL-Azzawi</h1>
   
  );

  return (
    <nav className="navbar">
      <a  href="https://student.labranet.jamk.fi/~AB0168/web_technologies/MyProject/main.html" 
      className="navbar-logo"
      target="_blank"
      rel="noopener noreferrer">
        {My_Name}
      </a>

   <HomeNavbar />
    </nav>
  );
}

export default memo(Header);
