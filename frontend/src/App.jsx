import { Routes, Route } from "react-router-dom";
import Navbar from "./landing-page/Navbar";
import HomeWrap from "./landing-page/home/HomeWrap";
import Signup from "./landing-page/signup/Signup";
import Login from "./landing-page/signup/Login";
import About from "./landing-page/about/About"
import Footer from "./landing-page/Footer";
import ProductsWrap from "./landing-page/products/ProductsWrap";
import PricingWrap from "./landing-page/pricing/PricingWrap";
import SupportWrap from "./landing-page/support/SupportWrap";
import Notfound from "./landing-page/Notfound";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeWrap />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsWrap />} />
        <Route path="/pricing" element={<PricingWrap />} />
        <Route path="/support" element={<SupportWrap />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
