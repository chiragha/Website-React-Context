import React, { useState, useEffect } from "react";
import { productsData } from "../data/productspageData";
import ProductPageCard from "../components/ProductPageCards";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

export default function Products() {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || "all");
  const [price, setPrice] = useState(100);
  const [sort, setSort] = useState("recommended");
  const [openSort, setOpenSort] = useState(false);

  const filteredProducts = productsData
    .filter(
      (p) => selectedCategory === "all" || p.category === selectedCategory,
    )
    .filter((p) => p.price <= price)
    .sort((a, b) => {
      if (sort === "low-high") return a.price - b.price;
      if (sort === "high-low") return b.price - a.price;
      if (sort === "a-z") return a.name.localeCompare(b.name);
      if (sort === "z-a") return b.name.localeCompare(a.name);
      if (sort === "newest")
        return new Date(b.createdAt) - new Date(a.createdAt);

      return 0;
    });

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("all");
    }
  }, [category]);

  return (
    <>
      <Navbar />
     <div className="flex flex-col md:flex-row px-4 sm:px-6 md:px-10 py-6 md:py-10 gap-6 md:gap-10 font-sans">
        {/* Sidebar */}

        <div className="w-full md:w-[260px] text-[#6a0610]">
          {/* Browse By */}
          <h3 className="text-lg font-semibold mb-4">Browse by</h3>

          <hr className="border-red-200 my-3" />

          <ul className="text-sm space-y-3  pb-6">
            <li onClick={() => setSelectedCategory("all")}>All Products</li>

            <li onClick={() => setSelectedCategory("cleanse")}>Cleanse</li>

            <li onClick={() => setSelectedCategory("hydrate")}>Hydrate</li>

            <li onClick={() => setSelectedCategory("protect")}>Protect</li>
          </ul>

          {/* Filter By */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Filter by</h3>

            <hr className="border-red-200 my-3" />

            {/* Price */}
            <div className=" py-4">
              <div className="flex justify-between text-sm mb-3">
                <span>Price</span>
                <span>−</span>
              </div>

              <input
                type="range"
                min="15"
                max="60"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full accent-[#6a0610]"
              />

              <div className="flex justify-between text-xs mt-2">
                <span>$15</span>
                <span>$60</span>
              </div>
            </div>

          
          </div>
        </div>

        {/* Products Area */}

        <div className="flex-1">
          {/* Sort */}

          <div className="relative flex justify-end mb-6">
            {/* Sort Button */}
            <div
              onClick={() => setOpenSort(!openSort)}
              className="cursor-pointer text-[#6a0610] flex items-center gap-2"
            >
              Sort by:{" "}
              {sort === "recommended"
                ? "Recommended"
                : sort === "newest"
                  ? "Newest"
                  : sort === "low-high"
                    ? "Price (low to high)"
                    : sort === "high-low"
                      ? "Price (high to low)"
                      : sort === "a-z"
                        ? "Name A-Z"
                        : "Name Z-A"}
              ▲
            </div>

            {/* Dropdown */}
            {openSort && (
              <div className="absolute top-8 right-0 bg-white w-[220px] shadow-lg border border-gray-300 z-50">
                <div
                  onClick={() => {
                    setSort("recommended");
                    setOpenSort(false);
                  }}
                  className="px-4 py-3 hover:bg-gray-200 cursor-pointer"
                >
                  Recommended
                </div>

                <div
                  onClick={() => {
                    setSort("newest");
                    setOpenSort(false);
                  }}
                  className="px-4 py-3 hover:bg-gray-200 cursor-pointer"
                >
                  Newest
                </div>

                <div
                  onClick={() => {
                    setSort("low-high");
                    setOpenSort(false);
                  }}
                  className="px-4 py-3 hover:bg-gray-200 cursor-pointer"
                >
                  Price (low to high)
                </div>

                <div
                  onClick={() => {
                    setSort("high-low");
                    setOpenSort(false);
                  }}
                  className="px-4 py-3 hover:bg-gray-200 cursor-pointer"
                >
                  Price (high to low)
                </div>

                <div
                  onClick={() => {
                    setSort("a-z");
                    setOpenSort(false);
                  }}
                  className="px-4 py-3 hover:bg-gray-200 cursor-pointer"
                >
                  Name A-Z
                </div>

                <div
                  onClick={() => {
                    setSort("z-a");
                    setOpenSort(false);
                  }}
                  className="px-4 py-3 hover:bg-gray-200 cursor-pointer"
                >
                  Name Z-A
                </div>
              </div>
            )}
          </div>

          {/* Product Grid */}

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductPageCard
                key={product.id}
                product={product}
                showCart={true}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
