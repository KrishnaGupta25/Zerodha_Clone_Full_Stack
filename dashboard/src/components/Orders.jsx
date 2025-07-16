import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://zerodha-clone-6f98.onrender.com/allOrders")
      .then((res) => setAllOrders(res.data))
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        {allOrders.length === 0 ? (
          <div className="no-orders">
            <p>You haven't placed any orders today</p>
            <Link to={"/"} className="btn">
              Get started
            </Link>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order, index) => (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price.toFixed(2)}</td>
                  <td className={order.mode === "BUY" ? "buy-mode" : "sell-mode"}>
                    {order.mode}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Orders;
