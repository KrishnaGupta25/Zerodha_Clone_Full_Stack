import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img src="/assets/homeHero.png" alt="Hero img" className="mb-5 w-75 d-block mx-auto" />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-2 btn btn-primary w-25 w-md-25 mx-auto d-block" style={{fontSize: "16px"}}
        >
          <a href="/signup" style={{textDecoration: "none", color: "white"}}>Sign up Now</a>
        </button>
      </div>
    </div>
  );
}

export default Hero;
