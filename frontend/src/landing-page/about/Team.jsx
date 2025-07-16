import React from "react";

function Team() {
  return (
    <div className="conatiner">
      <div className="row p-3">
        <h1 className="fs-1 text-center p-5">
          People <br />
        </h1>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-lg-5 col-sm-11 mt-3 p-3 text-center text-muted">
          <img
            className="rounded-circle w-50"
            src="/assets/nithinKamath.jpg"
            alt="Founder's img"
          />
          <h4 className="p-3">Nithin Kamath</h4>
          <h6>Founder & CEO</h6>
        </div>
        <div className="col-lg-5 col-sm-11 mt-3 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a className="text-decoration-none" href="">
              Homepage
            </a>{" "}
            /{" "}
            <a className="text-decoration-none" href="">
              TradingQnA
            </a>{" "}
            /{" "}
            <a className="text-decoration-none" href="">
              Twitter
            </a>
          </p>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Team;
