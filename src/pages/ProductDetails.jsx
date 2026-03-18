import React from 'react'
import { useParams } from "react-router-dom";
import { useState } from "react";
import { productsData } from "../data/productspageData"; // your product data
import Accordion from "../components/Accordion";
import Navbar from '../components/Navbar';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


export default function ProductDetails() {

  const navigate = useNavigate();
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = productsData.find(p => p.id === Number(id));

  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
  if (!size) {
    toast.error("Please select a size");
    return;
  }

  addToCart(product, size, qty);

  toast.success("Added to cart 🛒");
};

  return (
   <>
   <Navbar />
  <div className="flex flex-col md:flex-row px-4 sm:px-6 md:px-10 py-6 md:py-10 gap-6 md:gap-10 font-sans">

      {/* LEFT IMAGE */}
      <div>
        <img
          src={product.img}
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div>

        <h1 className="text-xl sm:text-2xl font-semibold text-[#6a0610]">
         toast.success(`${product.name} added to cart`);
        </h1>

        <p className="text-gray-500 line-through">
          ${product.oldPrice}
        </p>

        <p className="text-lg font-medium mb-4">
          ${product.price}
        </p>

        {/* SIZE */}
        <div className="mb-4">
          <p className="text-md font-semibold mb-2 text-gray-700">
            Size*
          </p>

          <div className="flex gap-2">
           {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`border cursor-pointer px-3 py-1  rounded-2xl  ${
                  size === s ? "bg-[#6a0610] text-white " : ""
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* QUANTITY */}
        <div className="flex items-center gap-3 mb-4 ">

          <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)} className="border cursor-pointer px-2 rounded-xl">
            -
          </button>

          <span>{qty}</span>

         <button onClick={() => setQty(qty + 1)} className="border cursor-pointer px-2 rounded-xl">
            +
          </button>

        </div>

        {/* BUTTONS */}
        <button
  onClick={handleAddToCart}
  className="w-full bg-[#4d3030] font-sans cursor-pointer text-white py-3 mb-2 rounded-3xl"
>
  Add to Cart
</button>

        <button className="w-full border cursor-pointer font-sans border-[#6a0610] py-3 rounded-3xl">
          Buy Now
        </button>

        {/* ACCORDION */}
        <div className="mt-6 space-y-3">

          <Accordion title="Shipping Info" />
          <Accordion title="Return & Refund Policy" />
          <Accordion title="Product Info" />

        </div>

      </div>

    </div>
   </>
  

  );
}
