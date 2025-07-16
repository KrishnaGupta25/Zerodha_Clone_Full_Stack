import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsWrap() {
  return (
    <>
      <Hero />
      <LeftSection
        imgUrl="assets/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data,
         advanced charts, an elegant UI, and more. 
        Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try Demo &rarr;"
        learnMore="Learn More &rarr;"
        googlePlay=""
        appStore=""
      />
      <RightSection
        imgUrl="assets/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account.
        Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo="Learn more"
      />
      <LeftSection
        imgUrl="assets/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account.
         Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin &rarr;"
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imgUrl="assets/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs.
        If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo="Kite Connect"
      />
      <LeftSection
        imgUrl="assets/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations.
         Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center fs-5 ">
        Want to know more about our technology stack? Check out the{" "}
        <a className="text-decoration-none" href="">
          Zerodha.tech
        </a>{" "}
        blog.
      </p>
      <Universe/>
    </>
  );
}

export default ProductsWrap;
