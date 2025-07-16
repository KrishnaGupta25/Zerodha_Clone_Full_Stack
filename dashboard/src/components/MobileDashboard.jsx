import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MobileDashboard.css" 

const MobileDashboard = () => {
  return (
    <div className="mobile-dashboard min-vh-100 d-flex flex-column align-items-center bg-light">
      {/* Notification Banner */}
      <div className="alert alert-warning text-center w-100 py-1">
      ⚠️ This is a demonstration platform using test data. Please use a system screen to access the live platform.
      </div>

      {/* Welcome Text */}
      <h2 className="mt-1">Hi, Demo</h2>

      {/* Equity Card */}
      <div className="card w-75 my-1 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Equity</h5>
          <p className="card-text"><strong>1L</strong> Margin Available</p>
          <p className="small">Margins used: 0</p>
          <p className="small">Opening balance: 1L</p>
          <a href="#" className="text-primary">View statement</a>
        </div>
      </div>

      {/* Commodity Card */}
      <div className="card w-75 my-1 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Commodity</h5>
          <p className="card-text"><strong>50K</strong> Margin Available</p>
          <p className="small">Margins used: 0</p>
          <p className="small">Opening balance: 50K</p>
          <a href="#" className="text-primary">View statement</a>
        </div>
      </div>
    </div>
  );
};

export default MobileDashboard;
