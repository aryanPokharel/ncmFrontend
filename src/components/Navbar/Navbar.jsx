import React, { useState } from 'react';
import './Navbar.css';
import Button from '@mui/material/Button';

const Navbar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }
  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <div className="container-fluid">

        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <a className="navbar-brand mt-2 mt-lg-0" href="/">

            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEXdHj/////cK0fcJkPdHT3bMU/dFDnhXXPhaXzcAC/aMErcADPcADHcCDXsrrnonqXvusLdQVfmj5jqo6/pnqr11dnzys7dUmf03N7kg4znpavcQlvrqLTu0tXvzdLtwsnjcoPbACLbACjbACHhd4bvusPjk56mka92AAACCElEQVR4nO3c23ISURBAURQykQQ1MSqo5Krx/z9RX3iwCk+PBLo5uPYH9MyqqXk6l8nryWk3nRD2HmH/EfYfYf8R9h9h/xH2H2H/EfYfYf8Rtpot5lGLYY/vulsvEA7L1aeo1Zdy4kuE56/i3l/u8213ibARIWFShI0ICZMibERImBRhI0LCpAgbERImRdiIkDApwkaEhEkRNiIkTOrgwvksp2GY1Qi/nl0n9e1iO/HQwsTWi1MX3mz/5U9J6BsSEpZHSEhYHyEhYX2EhIT1ERIS1kdISFgfISFhfYSEhPWta4S363dhdyPm3MdjHrYfjD/4XozHRdTjhxFzzp/COX85+X8E+2nejhG+2fnmAsJGhISbCAmDCBsREm4iJAwibERIuImQMIiwESHhJkLCIMJGhISbCAmDCBv1LhzCG+WflmOE38M5o9aA9y8cflw9XwWNWX9fxWOeb0uElzcjHpvYAYQfq01/RkhIWB8hIWF9hISE9RESEtZHSEhYHyEhYX2EhIT1ERIS1kf478LZ9CKr6c8S4W9jVouj3U+zr453x9C+IiQMIkyIkDCIMCFCwiDChAgJgwgTIiQMIkyIkDCIMCFCwiDChAgJgwgTGh7uPkfdLXsWjrjcYD6f7Tz9GISHjbD/CPuPsP8I+4+w/wj7j7D/CPuPsP/+B+E07WBFTZPJ9dmJ9wtiZ5EFKqzj8AAAAABJRU5ErkJggg=="
              height={35}
              alt="NCM Logo"
              loading="lazy"
            />

          </a>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/newsMedia">
                News&Media
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/location">
                Locations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://recruit.nepalcangroup.com/careers" target='new'>
                Jobs
              </a>
            </li>

          </ul>

        </div>

        {!isLoggedIn ?
          <button onClick={handleLogin} id='loginBtn'>Login</button>
          :
          <div className="d-flex align-items-center">
            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height={25}
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >

                <li>
                  <a className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        }
        <button>Track</button>

      </div>

    </nav>

  );
};

export default Navbar;
