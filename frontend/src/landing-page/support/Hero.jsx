import React from "react";
import SupportPortal from "./SupportPortal";

function Hero() {
  return (<>
  <SupportPortal/>
    <div className="container">
      <div className="row p-3 mt-5">
        <h1 className="fs-4 text-muted">
          To create a ticket, select a relevant topic
        </h1>
        <div className="col-lg-4 mt-5 col-sm-12 "  style={{ opacity: 0.8 }}>
          <h4 className="fs-5">
            <i className="fa-solid fa-plus"></i> Account Opening
          </h4>
          <p className="text-small text-muted">
            <ul className="list-unstyled">
              {[
                "Getting started",
                "Online",
                "Offline",
                "Charges",
                "Company, Partnership and HUF",
                "Non Resident Indian (NRI)",
              ].map((item) => (
                <li className="p-1" style={{ fontSize: "16px" }} key={item}>
                  <a className="text-decoration-none" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </p>
        </div>

        <div className="col-lg-4 mt-5 col-sm-12 " style={{ opacity: 0.8 }}>
          <h4 className="fs-5">
          <i class="fa-solid fa-user"></i>  Your Zerodha Account
          </h4>
          <p className="text-small text-muted">
            <ul className="list-unstyled">
              {[
                "Login credentials",
                "Your Profile",
                "Account modification and segment addition",
                "CMR & DP ID",
                "Nomination",
                "Transfer and conversion of shares",
              ].map((item) => (
                <li className="p-1" style={{ fontSize: "16px" }} key={item}>
                  <a className="text-decoration-none" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </p>
        </div>

        <div className="col-lg-4 mt-5 col-sm-12" style={{ opacity: 0.8 }}>
          <h4 className="fs-5">
          <i class="fa-solid fa-arrow-trend-up"></i>  Trading and Markets
          </h4>
          <p className="text-small text-muted">
            <ul className="list-unstyled">
              {[
                "Trading FAQs",
                "Kite",
                "Margins",
                "Product and order types",
                "Corporate actions",
                "Kite features",
              ].map((item) => (
                <li className="p-1" style={{ fontSize: "16px" }} key={item}>
                  <a className="text-decoration-none" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </p>
        </div>

        <div className="col-lg-4 mt-5 col-sm-12" style={{ opacity: 0.8 }}>
          <h4 className="fs-5">
          <i class="fa-solid fa-money-check-dollar"></i> Funds
          </h4>
          <p className="text-small text-muted">
            <ul className="list-unstyled">
              {[
                "Fund withdrawal",
                "Adding funds",
                "Adding bank accounts",
                "eMandates",
              ].map((item) => (
                <li className="p-1" style={{ fontSize: "16px" }} key={item}>
                  <a className="text-decoration-none" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </p>
        </div>

        <div className="col-lg-4 mt-5 col-sm-12" style={{ opacity: 0.8 }}>
          <h4 className="fs-5">
          <i class="fa-solid fa-compact-disc"></i> Console
          </h4>
          <p className="text-small text-muted">
            <ul className="list-unstyled">
              {[
                "IPO",
                "Portfolio",
                "Funds statement",
                "Profile",
                "Reports",
                "Referral program",
              ].map((item) => (
                <li className="p-1" style={{ fontSize: "16px" }} key={item}>
                  <a className="text-decoration-none" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </p>
        </div>

        <div className="col-lg-4 mt-5 col-sm-12" style={{ opacity: 0.8 }}>
          <h4 className="fs-5">
          <i class="fa-solid fa-coins"></i> Coins
          </h4>
          <p className="text-small text-muted">
            <ul className="list-unstyled">
              {[
                "Understanding mutual funds and Coin",
                "Coin app",
                "Coin web",
                "Transactions and reports",
                "National Pension Scheme (NPS)",
              ].map((item) => (
                <li className="p-1" style={{ fontSize: "16px" }} key={item}>
                  <a className="text-decoration-none" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Hero;
