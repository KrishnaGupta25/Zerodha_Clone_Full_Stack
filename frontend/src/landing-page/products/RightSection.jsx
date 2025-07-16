import React from "react";

function RightSection({
  imgUrl,
  productName,
  productDescription,
  tryDemo,
  
}) {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-lg-5 col-sm-12 mt-5">
          <h1 className="mt-5">{productName}</h1>
          <p className="mt-3">{productDescription}</p>
          <div className="">
            <a
              className="text-decoration-none opacity-100 hover-opacity-50"
              href="#"
            >
              {tryDemo} &rarr;
            </a>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6 col-sm-12">
          <img className="img-fluid" src={imgUrl} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
