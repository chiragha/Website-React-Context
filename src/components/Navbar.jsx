import { FaUserCircle } from "react-icons/fa";
import { FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  return (
    <>
      <nav className="w-full shadow bg-white relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* LEFT: LOGO + HAMBURGER */}
          <div className="flex items-center gap-4">
            {/* HAMBURGER (MOBILE ONLY) */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* LOGO */}
            <Link
              to="/"
              className="text-2xl md:text-3xl tracking-[4px] md:tracking-[6px] font-semibold text-red-700"
            >
              ShineGirl.
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-8 text-gray-700 font-medium font-serif text-lg">
            <Link to="/products">Products</Link>
            <Link to="/products/cleanse">Cleanse</Link>
            <Link to="/products/hydrate">Hydrate</Link>
            <Link to="/products/protect">Protect</Link>
            <Link to="/new-arrivals">New Arrivals</Link>
            <Link to="/story">Our Story</Link>
          </ul>

          {/* RIGHT ICONS (ALWAYS VISIBLE) */}
          <div className="flex items-center gap-4 md:gap-6 text-gray-700">
            {/* LOGIN */}
            <Link to="/login" className="hidden sm:flex items-center gap-1">
              <FaUserCircle size={20} className="text-red-700" />
              <span className="hidden md:inline">Login</span>
            </Link>

            {/* WISHLIST */}
            <Link to="/wish_list" className="relative">
              <FiHeart size={20} />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 rounded-full">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* CART */}
            <Link to="/cart" className="relative cursor-pointer">
              <FiShoppingCart size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* 🔥 MOBILE MENU */}
        <div
          className={`md:hidden flex flex-col md:flex-row gap-4 md:gap-8 bg-white shadow-md  px-6 space-y-4 font-serif text-red-700 transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 py-4 cursor-pointer" : "max-h-0"
          }`}
        >
          <Link
            to="/products"
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer"
          >
            Products
          </Link>
          <Link
            to="/products/cleanse"
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer"
          >
            Cleanse
          </Link>
          <Link
            to="/products/hydrate"
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer"
          >
            Hydrate
          </Link>
          <Link
            to="/products/protect"
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer"
          >
            Protect
          </Link>
          <Link
            to="/new-arrivals"
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer"
          >
            New Arrivals
          </Link>
          <Link
            to="/story"
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer"
          >
            Our Story
          </Link>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
