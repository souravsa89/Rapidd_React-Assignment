import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const handleMobileMenuToggle = () => {
    setActiveMobileMenu(!activeMobileMenu);
  };

  const closeMobileMenu = () => {
    setActiveMobileMenu(false);
  };

  const handleDropdownToggle = (index) => {
    const dropdownId = `dropdown-${index}`;
    const dropdownElement = document.getElementById(dropdownId);
    dropdownElement.classList.toggle("active");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Logo
        </Link>
        <div
          className={`menu-icon ${activeMobileMenu ? "active" : ""}`}
          onClick={handleMobileMenuToggle}
        >
          {activeMobileMenu ? (
            <ImCross
              icon={ImCross}
              style={{ fontSize: "25px", color: "white" }}
            />
          ) : (
            <FaBars
              icon={FaBars}
              style={{ fontSize: "25px", color: "white" }}
            />
          )}
        </div>
        <ul className={`nav-menu ${activeMobileMenu ? "active" : ""}`}>
          <li className="nav-item">
            <div className="nav-link" onClick={() => handleDropdownToggle(1)}>
              Option 1 {activeMobileMenu && <IoMdArrowDropdown />}
            </div>
            <div id="dropdown-1" className="dropdown">
              <div className="column">
                <h3>Column 1</h3>
                <Link
                  to="/page1"
                  className="dropdown-link"
                  onClick={closeMobileMenu}
                >
                  Page 1
                </Link>
                <Link
                  to="/page2"
                  className="dropdown-link"
                  onClick={closeMobileMenu}
                >
                  Page 2
                </Link>
              </div>
              <div className="column">
                <h3>Column 2</h3>
                <Link
                  to="/page3"
                  className="dropdown-link"
                  onClick={closeMobileMenu}
                >
                  Page 3
                </Link>
                <Link
                  to="/page4"
                  className="dropdown-link"
                  onClick={closeMobileMenu}
                >
                  Page 4
                </Link>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={() => handleDropdownToggle(2)}>
              Option 2 {activeMobileMenu && <IoMdArrowDropdown />}
            </div>
            <div id="dropdown-2" className="dropdown">
              <div className="column">
                <h3>Column 1</h3>
                <Link
                  to="/page5"
                  className="dropdown-link"
                  onClick={closeMobileMenu}
                >
                  Page 5
                </Link>
                <Link
                  to="/page6"
                  className="dropdown-link"
                  onClick={closeMobileMenu}
                >
                  Page 6
                </Link>
              </div>
              <div className="column">
                <h3>Column 2</h3>
                <Link
                  to="/page7"
                  className="dropdown-link"
                  onClick={closeMobileMenu}
                >
                  Page 7
                </Link>
                <Link
                  to="/page8"
                  className="dropdown-link"
                  onClick={closeMobileMenu}
                >
                  Page 8
                </Link>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={() => handleDropdownToggle(3)}>
              Option 3 {activeMobileMenu && <IoMdArrowDropdown />}
            </div>
            <div id="dropdown-3" className="dropdown">
              <div className="column">
                <h3>Column 1</h3>
                <Link
                  to="/page9"
                  className="dropdown-link"
                  onClick={closeMobileMenu}
                >
                  Page 9
                </Link>
                <Link
                  to="/page10"
                  className="dropdown-link"
                  onClick={closeMobileMenu}
                >
                  Page 10
                </Link>
              </div>
              <div className="column">
                <h3>Column 2</h3>
                <Link
                  to="/page11"
                  className="dropdown-link"
                  onClick={closeMobileMenu}
                >
                  Page 11
                </Link>
                <Link
                  to="/page12"
                  className="dropdown-link"
                  onClick={closeMobileMenu}
                >
                  Page 12
                </Link>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={() => handleDropdownToggle(4)}>
              Option 4 {activeMobileMenu && <IoMdArrowDropdown />}
            </div>
            <div id="dropdown-4" className="dropdown">
              <div className="column">
                <h3>Column 1</h3>
                <Link
                  to="/page13"
                  className="dropdown-link"
                  onClick={closeMobileMenu}
                >
                  Page 13
                </Link>
                <Link
                  to="/page14"
                  className="dropdown-link"
                  onClick={closeMobileMenu}
                >
                  Page 14
                </Link>
              </div>
              <div className="column">
                <h3>Column 2</h3>
                <Link
                  to="/page15"
                  className="dropdown-link"
                  onClick={closeMobileMenu}
                >
                  Page 15
                </Link>
                <Link
                  to="/page16"
                  className="dropdown-link"
                  onClick={closeMobileMenu}
                >
                  Page 16
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
