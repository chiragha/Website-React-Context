import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { WishlistContext } from "../context/WishlistContext";
import { FaHeart } from "react-icons/fa";

export default function ProductPageCard({ product, showNewTag = false }) {

  const [size, setSize] = useState(null);
  const [qty, setQty] = useState(1);
const { wishlist, toggleWishlist } = useContext(WishlistContext);

const isWishlisted = wishlist.some(item => item.id === product.id);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }

    addToCart(product, size, qty);

    toast.success(`${product.name} added to cart 🛒`);
  };

  return (
    <div>

      <div className="relative font-sans">

        {/* NEW TAG */}
        {showNewTag && (
          <span className="absolute top-2 left-2 rounded bg-[#6a0610] text-white text-xs px-2 py-1">
            NEW
          </span>
        )}

        {/* IMAGE */}
        <button
  onClick={() => toggleWishlist(product)}
  className="absolute top-2 right-2"
>
  <FaHeart color={isWishlisted ? "red" : "white"} />
</button>
        <img
          src={product.img}
          className="rounded-lg w-full h-[200px] sm:h-[230px] md:h-[250px] object-cover"
        />

        {/* NAME */}
        <Link to={`/product/${product.id}`}>
          <h3 className="cursor-pointer hover:underline">
            {product.name}
          </h3>
        </Link>

        {/* PRICE */}
        <p className="text-[#6a0610] font-serif font-light text-md">
          ${product.price}
        </p>
      </div>

      {/* SIZE */}
      <div className="flex gap-2 mt-2">
        {product.sizes.map((s) => (
          <button
            key={s}
            onClick={() => setSize(s)}
            className={`border border-[#6a0610] px-2 py-1 text-xs rounded cursor-pointer ${
              size === s ? "bg-[#6a0610] text-white" : ""
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* BUTTON */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-[#4d3030] cursor-pointer text-white py-3 mt-3 rounded-3xl"
      >
        Add to Cart
      </button>

    </div>
  );
}