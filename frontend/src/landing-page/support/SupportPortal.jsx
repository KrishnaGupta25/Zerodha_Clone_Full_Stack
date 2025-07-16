import React from "react";

const SupportPortal = () => {
  return (
    <div className="container-fluid text-white py-5" style={{backgroundColor: "#387ed1"}}>
      <div className="container">
        <div className="row mt-2">
          {/* Left Section */}
          <div className="col-md-6">
            <h2 className="fw-bold fs-4">Support Portal</h2>
            <p className="mb-3 mt-5 fs-3">Search for an answer or browse help topics to create a ticket</p>
            <div className="input-group mb-3 mt-4">
              <input
                type="text"
                className="form-control"
                placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
              />
              <button className="btn btn-light">
              <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className="d-flex flex-wrap">
              <a href="#" className="me-3 text-white text-decoration-underline">Track account opening</a>
              <a href="#" className="me-3 text-white text-decoration-underline">Track segment activation</a>
              <a href="#" className="me-3 text-white text-decoration-underline">Intraday margins</a>
              <a href="#" className="text-white text-decoration-underline">Kite user manual</a>
            </div>
          </div>
          <div className="col-1"></div>
          {/* Right Section */}
          <div className="col-md-5 mt-5">
            <h4>Featured</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-underline">
                Change in mutual fund settlement cycle due to settlement holiday on account of Chhatrapati Shivaji Maharaj Jayanti (February 19, 2025)
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="text-white text-decoration-underline">
                  Settlement Holiday on account of Chhatrapati Shivaji Maharaj Jayanti on February 19, 2025
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPortal;
