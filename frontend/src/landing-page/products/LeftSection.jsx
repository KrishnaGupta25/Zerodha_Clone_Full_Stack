import React from "react";

function LeftSection({
  imgUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12 p-3">
          <img className="img-fluid" src={imgUrl} alt="" />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5 col-sm-12">
          <h1 className="mt-5">{productName}</h1>
          <p className="mt-3">{productDescription}</p>
          <div className="">
            <a
              className="text-decoration-none opacity-100 hover-opacity-50"
              href="https://dashboard-8jy230lg2-lalit-routs-projects.vercel.app/"
            >
              {tryDemo} 
            </a>
            <a
              className="p-5 text-decoration-none opacity-100 hover-opacity-50"
              href="#"
            >
              {learnMore} 
            </a>
          </div>
          <div className="mt-4 ">
            <a href={googlePlay}>
              <img src="assets/googlePlayBadge.svg" alt="" />
            </a>
            <a className="p-3" href={appStore}>
              <img src="assets/appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
