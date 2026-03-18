import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import ProductPageCard from "../components/ProductPageCards";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function WishlistPage() {
  const { wishlist } = useContext(WishlistContext);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-10 min-h-[60vh]">

        {/* EMPTY STATE */}
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-20 space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              Your wishlist is empty 💔
            </h2>

            <p className="text-gray-500 text-sm md:text-base">
              Save your favorite products here to buy later.
            </p>

            <Link
              to="/"
              className="mt-3 bg-[#6a0610] text-white px-6 py-2 rounded-full hover:bg-[#8a0c1b] transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* HEADER */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
              
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                My Wishlist
              </h1>

              <span className="text-sm text-gray-500">
                {wishlist.length} item{wishlist.length > 1 && "s"}
              </span>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlist.map((product) => (
                <ProductPageCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}