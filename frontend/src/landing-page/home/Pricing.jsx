import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-sm-12 mt-3 p-5">
          <h1 className="mb-3 fs-2">Unbeatable Pricing</h1>
          <p className="text-muted" fs-4>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a className="text-decoration-none" href="">
            See pricing &rarr;
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-lg-6 col-sm-12 mt-3 p-5">
          <div className="row text-center">
            <div className="col border rounded-1 p-2">
              <h1>&#8377;0</h1>
              <p className="text-muted">
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="col border rounded-1 p-2">
              <h1>&#8377;20</h1>
              <p className="text-muted">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
