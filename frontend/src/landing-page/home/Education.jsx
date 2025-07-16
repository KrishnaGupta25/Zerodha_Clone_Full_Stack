import React from "react";

function Education() {
  return (
    <div className="container p-3">
      <div className="row p-3">
        <div className="col-lg-6 col-sm-12 p-5">
          <img src="/assets/education.svg" alt="" className="mb-5 w-75" />
        </div>
        <div className="col-lg-6 col-sm-12 mt-5 p-5">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p className="text-muted ">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a className="text-decoration-none " href="">
            Varsity &rarr;
          </a>
          <p className="text-muted mt-3 ">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a className="text-decoration-none" href="">
            TradingQ&A &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
