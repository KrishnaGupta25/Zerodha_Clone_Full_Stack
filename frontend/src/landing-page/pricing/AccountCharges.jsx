import React from "react";

const AccountCharges = () => {
  const chargesData = [
    { type: "Online account", charge: "FREE", free: true, priority: "high" },
    { type: "Offline account", charge: "FREE", free: true, priority: "high" },
    { type: "NRI account (offline only)", charge: "₹ 500", free: false, priority: "medium" },
    { type: "Partnership, LLP, HUF, or Corporate accounts (offline only)", charge: "₹ 500", free: false, priority: "low" },
  ];

  const getOpacityClass = (priority) => {
    switch (priority) {
      case "high":
        return "opacity-75";
      case "medium":
        return "opacity-75";
      case "low":
        return "opacity-75";
      default:
        return "opacity-75";
    }
  };

  return (
    <div className="container mt-5 p-4 bg-white">
      <h2 className="mb-4">Charges for account opening</h2>
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th className="text-muted">Type of account</th>
            <th className="text-muted">Charges</th>
          </tr>
        </thead>
        <tbody>
          {chargesData.map((item, index) => (
            <tr key={index} className={getOpacityClass(item.priority)}>
              <td>{item.type}</td>
              <td className="text-center">
                {item.free ? (
                  <span className="badge bg-success text-white">{item.charge}</span>
                ) : (
                  item.charge
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountCharges;
