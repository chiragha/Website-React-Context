import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
// replace with your own images
import bigImg from "../assets/img1.avif";
import p1 from "../assets/img2.avif";
import p1h from "../assets/img2h.avif";
import p2 from "../assets/img3h.avif";
import p2h from "../assets/img3.avif";
import p3 from "../assets/img4.avif";
import p3h from "../assets/img4h.avif";
import p4 from "../assets/img5.avif";
import p4h from "../assets/img5h.avif";

const products = [
  {
    id: 1,
    name: "Hydrating Solar Mist",
    price: 22,
    image1: p1,
    image2: p1h,
    tags: ["Coconut", "Unscented"],
  },
  {
    id: 2,
    name: "Cooling After Sun Gel",
    price: 24,
    image1: p2,
    image2: p2h,
    tags: ["50ml", "100ml"],
  },
  {
    id: 3,
    name: "Solar Lip Shield",
    price: 15,
    image1: p3,
    image2: p3h,
    tags: ["Coconut", "Watermelon"],
  },
  {
    id: 4,
    name: "Glow Daily Sun Serum",
    price: 20,
    image1: p4,
    image2: p4h,
    tags: ["20ml", "50ml"],
  },
];

const SolarEssentials = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">

      {/* LEFT LARGE IMAGE */}
      <div className="relative">
        <img
          src={bigImg}
          className="rounded-xl w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
        />

        <div className="absolute bottom-4 left-4 text-[#6a0610] font-sans bg-white px-4 py-2 rounded-md text-md shadow">
          <p>Sheer Body Sunscreen</p>
          <p className="font-semibold">$35</p>
        </div>
      </div>

      {/* RIGHT PRODUCTS */}
      <div>

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold text-[#6a0610]">
            Solar Essentials
          </h2>

          <Link to="/products" className="text-md cursor-pointer font-sans border border-[#6a0610] text-[#6a0610] px-3 py-1 rounded hover:bg-red-50">
            Shop All →
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-6 cursor-pointer">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolarEssentials;