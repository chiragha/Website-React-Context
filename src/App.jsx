import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Product";
import React from "react";
import NewArrivals from "./pages/NewArrivals";
import CartPage from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";
import Story from "./pages/Story";
import { Toaster } from "react-hot-toast";
import WishlistPage from "./pages/WishlistPage";
import LogIn from "./pages/LogIn";


function App() {
  return (
   
    <BrowserRouter>

      {/* ✅ TOASTER (global) */}
      <Toaster position="top-right" />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<Products />} />

        <Route path="/new-arrivals" element={<NewArrivals />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/story" element={<Story />} />
        <Route path="/wish_list" element={<WishlistPage />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;