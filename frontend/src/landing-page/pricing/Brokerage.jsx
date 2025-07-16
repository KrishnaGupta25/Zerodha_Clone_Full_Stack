import React from "react";

const Brokerage = () => {
  return (
    <div className="container mt-3">
      <h5 className="text-center mt-5">
      <a className="text-decoration-none" href="">Calculate your costs upfront</a> using our brokerage calculator
      </h5>

      <div className="row mt-5">
        {/* Left Column */}
        <div className="col-md-6">
          <div className="p-2 mb-2" style={{ fontSize: "12px" }}>
            <h6 className="mt-5">Securities/Commodities Transaction Tax</h6>
            <p>
              Tax by the government when transacting on the exchanges. Charged
              on both buy and sell sides when trading equity delivery. Charged
              only on selling side when trading intraday or on F&O.
            </p>
            <p>
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
          </div>

          <div className="p-2 mb-2" style={{ fontSize: "12px" }}>
            <h6>Transaction/Turnover Charges</h6>
            <p>
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
            </p>
            <p>
              BSE has revised transaction charges in various groups from ₹10,000
              to ₹1,00,000 per crore of gross turnover.
            </p>
            <p>
              BSE has revised transaction charges for group A, B and other non
              exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
              W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
              December 1, 2022.
            </p>
            <p>
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross turnover.
            </p>
          </div>

          <div className="p-2 mb-2" style={{ fontSize: "12px" }}>
            <h6>Call & Trade</h6>
            <p>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6">
          <div className="p-2 mb-2" style={{ fontSize: "12px" }}>
            <h6 className="mt-5">GST</h6>
            <p>
              Tax levied by the government on the services rendered. 18% of
              (brokerage + SEBI charges + transaction charges).
            </p>
          </div>

          <div className="p-2 mb-2" style={{ fontSize: "12px" }}>
            <h6>SEBI Charges</h6>
            <p>
              Charged at ₹10 per crore + GST by SEBI for regulating the markets.
            </p>
          </div>

          <div className="p-2 mb-2" style={{ fontSize: "12px" }}>
            <h6>DP (Depository Participant) Charges</h6>
            <p>
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
              charged on the trading account ledger when stocks are sold,
              irrespective of quantity.
            </p>
          </div>

          <div className="p-2 mb-2" style={{ fontSize: "12px" }}>
            <h6>Pledging Charges</h6>
            <p>₹30 + GST per pledge request per ISIN.</p>
          </div>

          <div className="p-2 mb-2" style={{ fontSize: "12px" }}>
            <h6>AMC (Account Maintenance Charges)</h6>
            <p>
              For BSDA demat account: Zero charges if the holding value is less
              than ₹4,00,000.
            </p>
            <p>
              For non-BSDA demat accounts: ₹300/year + GST charged quarterly
              (₹90 days).
            </p>
          </div>
        </div>
      </div>
      <div className="row p-2 mb-2" style={{ fontSize: "12px" }}>
        <h6>Disclaimer</h6>
        <p>
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
    </div>
  );
};

export default Brokerage;
