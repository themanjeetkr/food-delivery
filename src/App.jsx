import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ Add Routes
import { useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./Component/Footer/Footer";
import LoginPopup from "./Component/LoginPopup/LoginPopup";

const App = () => {
  const [showlogin, setshowlogin] = useState(false)
  return (
    <>
    {showlogin?<LoginPopup setshowlogin={setshowlogin}/>:<></>}
      <div className="app">

        <Navbar setshowlogin={setshowlogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} /> {/* ✅ Fixed path */}
        </Routes>
        {/* <footer></footer> */}
      </div>
      <Footer />
    </>
  );
};

export default App;
