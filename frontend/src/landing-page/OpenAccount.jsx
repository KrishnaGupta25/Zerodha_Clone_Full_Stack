import React from 'react'

function OpenAccount() {
    return (
        <div className="container p-5">
        <div className="row text-center">
          <h1 className="mt-5">Open a Zerodha account</h1>
          <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades          </p>
          <button
            className="p-2 btn btn-primary w-25 mx-auto d-block " style={{fontSize: "16px"}}
          >
            <a href="/signup" style={{textDecoration: "none", color: "white"}}>Sign up for free</a>
          </button>
        </div>
      </div>
    );
}

export default OpenAccount;