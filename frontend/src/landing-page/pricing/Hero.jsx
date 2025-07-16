import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 text-center">
        <h1 className="text-center">Charges</h1>
        <h3 className="text-center text-muted mt-3 mb-5">
          List of all charges and taxes
        </h3>
        <div className="col-lg-4 mt-5 col-sm-12">
          <img className="w-75" src="assets/pricing0.svg" alt="" />
          <h4>Free equity delivery</h4>
          <p className="text-small text-muted">
            All equity delivery investments (NSE, BSE),
            <br /> are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-lg-4 mt-5 col-sm-12">
          <img className="w-75" src="assets/other-trades.svg" alt="" />
          <h4>Intraday and F&O trades</h4>
          <p className="text-small text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-lg-4 mt-5 col-sm-12">
          <img className="w-75" src="assets/pricingMF.svg" alt="" />
          <h4>Free direct MF</h4>
          <p className="text-small text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
