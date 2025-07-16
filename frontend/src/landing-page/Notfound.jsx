import React from "react";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <h4 className="mt-5">404 Not found</h4>
        <p>Sorry, the page you are looking for does not exits.... <i className="fa-solid fa-face-sad-tear"></i></p>{" "}
        <Link to="/"><button className="p-2 btn btn-primary fs-small w-15 w-md-25 mx-auto d-block">
          Click to go home
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Notfound;
