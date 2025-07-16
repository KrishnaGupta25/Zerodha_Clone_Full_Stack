import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsMenuOpen(false); // Close menu on selection (for mobile)
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
     {/* Logo */}
 <a className="navbar-brand" href="/">
   <img src="/logo.png" style={{ width: "20px" , marginLeft: "1rem" }} alt="Logo" />
 </a>
    <nav className="navbar navbar-expand-md ms-auto"style={{height:"8rem"}} >
      <div className="container-fluid">

        {/* Toggle Button for Small Screens - Positioned Right */}
        <button
          className="navbar-toggler btn-sm ms-auto"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item d-none d-md-block">
              <Link className="nav-link" to="/" onClick={() => handleMenuClick(0)}>
                Dashboard
              </Link>
            </li>
            <li className="nav-item d-none d-md-block">
              <Link className="nav-link" to="/orders" onClick={() => handleMenuClick(1)}>
                Orders
              </Link>
            </li>
            <li className="nav-item d-none d-md-block">
              <Link className="nav-link" to="/holdings" onClick={() => handleMenuClick(2)}>
                Holdings
              </Link>
            </li>
            <li className="nav-item d-none d-md-block">
              <Link className="nav-link" to="/positions" onClick={() => handleMenuClick(3)}>
                Positions
              </Link>
            </li>
            <li className="nav-item d-none d-md-block">
              <Link className="nav-link" to="/funds" onClick={() => handleMenuClick(4)}>
                Funds
              </Link>
            </li>
          </ul>

          {/* Profile Section */}
          <div className="navbar-text ms-md-3 d-flex align-items-center">
            <div className="avatar d-inline-block bg-primary text-white p-2 rounded-circle">
              ZU
            </div>
            <span className="ms-2">USERID</span>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Menu;
