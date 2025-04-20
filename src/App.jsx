import React, { useEffect } from "react";
import NavBar from "./Components/NavBar";
import Shop from "./Pages/Shop.jsx";
import Login from "./Pages/Login.jsx";
import Cart from "./Pages/Cart.jsx";
import Page404 from "./Pages/Page404.jsx";
import Footer from "./Components/Footer.jsx";
import { Route, Routes } from "react-router";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import Product from "./Pages/Product.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import MenBanner from "./assets/banner_mens.png";
import WomenBanner from "./assets/banner_mens.png";
import KidsBanner from "./assets/banner_mens.png";
import ProductDisplay from './Components/ProductDisplay.jsx'
import SignUp from "./Pages/SignUp.jsx";
import AOS from 'aos';
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-up">
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/men"
          element={<ShopCategory category="men" banner={MenBanner} />}
        />
        <Route
          path="/women"
          element={<ShopCategory category="women" banner={WomenBanner} />}
        />
        <Route
          path="/kids"
          element={<ShopCategory category="kids" banner={KidsBanner} />}
        />
        <Route path="/product" element={<Product />}>
          <Route path=":id" element={<ProductDisplay />}/>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
