import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row">
        <div className="mt-5 p-3 text-center">
          <h1 className="text-muted">The Zerodha Universe</h1>
          <p className="mt-3">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>
      {/* Image Section with Horizontal Alignment */}
      <div className="row d-flex justify-content-center text-center">
        <div className="col-lg-4 col-sm-6">
          <img
            className="w-50 p-3 mx-auto"
            src="assets/zerodhaFundhouse (1).png"
            alt="Fundhouse 1"
          />
          <p className="text-small text-muted"  style={{ fontSize: "0.8rem"}}>
            Our asset management venture <br /> that is creating simple and transparent
            index <br /> funds to help you save for your goals.
          </p>
        </div>
        <div className="col-lg-4 col-sm-6">
          <img
            className="w-75 p-3 mx-auto"
            src="assets\sensibullLogo.svg"
            alt=""
          />
          <p className="text-small text-muted" style={{ fontSize: "0.8rem"}}>
            Options trading platform that lets you <br /> create strategies, analyze
            positions, and examine <br /> data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-lg-4 col-sm-6">
          <img className="w-50 p-3 mx-auto" src="assets/tijori.svg" alt="" />
          <p className="text-small text-muted"  style={{ fontSize: "0.8rem"}}>
            Investment research platform <br /> that offers detailed insights on
            stocks,<br /> sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-lg-4 col-sm-6">
          <img
            className="w-50 p-3 mx-auto"
            src="assets/streakLogo.png"
            alt=""
          />
          <p className="text-small text-muted"  style={{ fontSize: "0.8rem"}}>
            Systematic trading platform <br /> that allows you to create and backtest <br />
            strategies without coding.
          </p>
        </div>
        <div className="col-lg-4 col-sm-6">
          <img
            className="w-75 p-3 mx-auto"
            src="assets/smallcaseLogo.png"
            alt=""
          />
          <p className="text-small text-muted"  style={{ fontSize: "0.8rem"}}>
            Thematic investing platform <br /> that helps you invest in diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-lg-4 col-sm-6">
          <img className="w-50 p-3 mx-auto" src="assets/dittoLogo.png" alt="" />
          <p className="text-small text-muted"  style={{ fontSize: "0.8rem"}}>
            Personalized advice on life <br /> and health insurance. No spam <br /> and no
            mis-selling.
          </p>
        </div>
        <button class="p-2 btn btn-primary fs-5 w-25 w-md-25 mx-auto d-block mt-5">Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
