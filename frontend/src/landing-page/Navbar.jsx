import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar border-bottom navbar-expand-lg">
      <div className="container-fluid p-2 ms-5">
        <Link className="navbar-brand" to="/">
          <img
            className="w-75 me-3"
            src="/assets/logo.svg"
            alt="Bootstrap"
            width="30"
            height="24"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex ms-auto me-4 gap-3 list-unstyled">
            <li className="nav-item">
              <Link
                className="nav-link text-decoration-none"
                style={{ color: "gray" }}
                onMouseEnter={(e) => (e.target.style.color = "#0d6efd")}
                onMouseLeave={(e) => (e.target.style.color = "gray")}
                aria-current="page"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-decoration-none"
                style={{ color: "gray" }}
                onMouseEnter={(e) => (e.target.style.color = "#0d6efd")}
                onMouseLeave={(e) => (e.target.style.color = "gray")}
                aria-current="page"
                to="/login"
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-decoration-none"
                style={{ color: "gray" }}
                onMouseEnter={(e) => (e.target.style.color = "#0d6efd")}
                onMouseLeave={(e) => (e.target.style.color = "gray")}
                aria-current="page"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-decoration-none"
                style={{ color: "gray" }}
                onMouseEnter={(e) => (e.target.style.color = "#0d6efd")}
                onMouseLeave={(e) => (e.target.style.color = "gray")}
                aria-current="page"
                to="/products"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-decoration-none"
                style={{ color: "gray" }}
                onMouseEnter={(e) => (e.target.style.color = "#0d6efd")}
                onMouseLeave={(e) => (e.target.style.color = "gray")}
                aria-current="page"
                to="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-decoration-none"
                style={{ color: "gray" }}
                onMouseEnter={(e) => (e.target.style.color = "#0d6efd")}
                onMouseLeave={(e) => (e.target.style.color = "gray")}
                aria-current="page"
                to="/support"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
