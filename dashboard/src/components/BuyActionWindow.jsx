import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [error, setError] = useState(null);
  const { closeBuyWindow } = useContext(GeneralContext);
  const navigate = useNavigate();

  const handleBuyClick = async () => {
    try {
      const response = await axios.post(
        "https://zerodha-clone-full-stack-backend.onrender.com/newOrder",
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "BUY",
        }
      );
      console.log("Order placed:", response.data);
      closeBuyWindow();
    } catch (err) {
      console.error("Error placing order:", err);
      setError("Failed to place order. Please try again.");
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
              min="1"
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="100"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
              min="0"
            />
          </fieldset>
        </div>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="buttons">
        <span>
          Margin required ₹
          {stockQuantity > 0 && stockPrice > 0
            ? (stockQuantity * stockPrice).toFixed(2)
            : "0.0"}
        </span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
