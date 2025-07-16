import React, { useState } from "react";

const BrokerageCalculator = () => {
  const [activeTab, setActiveTab] = useState("Equity");

  const renderTable = () => {
    switch (activeTab) {
      case "Equity":
        return (
          <table className="table table-bordered mt-3 text-muted" style={{ borderRadius: "8px", fontSize: "14px" }}>
            <thead>
              <tr>
                <th>Equity delivery</th>
                <th>Equity intraday</th>
                <th>F&O - Futures</th>
                <th>F&O - Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order</td>
                <td>0.03% or Rs. 20/executed order</td>
                <td>Flat Rs. 20 per executed order</td>
              </tr>
              <tr>
                <td>STT/CTT: 0.1% on buy & sell</td>
                <td>0.025% on the sell side</td>
                <td>0.02% on the sell side</td>
                <td>0.1% on sell side (premium)</td>
              </tr>
            </tbody>
          </table>
        );
      case "Currency":
        return (
          <table className="table table-bordered mt-3 text-muted" style={{ borderRadius: "8px", fontSize: "14px" }}>
            <thead>
              <tr>
                <th>Currency futures</th>
                <th>Currency options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0.03% or ₹20/executed order</td>
                <td>₹20/executed order</td>
              </tr>
              <tr>
                <td>STT/CTT: No STT</td>
                <td>No STT</td>
              </tr>
            </tbody>
          </table>
        );
      case "Commodity":
        return (
          <table className="table table-bordered mt-3 text-muted" style={{ borderRadius: "8px", fontSize: "14px" }}>
            <thead>
              <tr>
                <th>Commodity futures</th>
                <th>Commodity options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0.03% or Rs. 20/executed order</td>
                <td>₹20/executed order</td>
              </tr>
              <tr>
                <td>STT/CTT: 0.01% on sell side</td>
                <td>0.05% on sell side</td>
              </tr>
            </tbody>
          </table>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mt-4">
      <ul className="nav nav-tabs">
        {['Equity', 'Currency', 'Commodity'].map((tab) => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
      {renderTable()}
    </div>
  );
};

export default BrokerageCalculator;
