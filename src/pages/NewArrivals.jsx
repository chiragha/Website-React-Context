import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../data/productspageData";
import ProductPageCard from "../components/ProductPageCards";
import Navbar from "../components/Navbar";

export default function NewArrivals() {

  const { category } = useParams();

  const [price, setPrice] = useState(100);
  const [sort, setSort] = useState("recommended");
  const [openSort, setOpenSort] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sync category (optional)
  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("all");
    }
  }, [category]);

  // ✅ FILTER LOGIC
  const filteredProducts = productsData
    .filter((p) => p.isNew) // only new arrivals
    .filter((p) =>
      selectedCategory === "all"
        ? true
        : p.category === selectedCategory
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

  return (
    <>
      <Navbar />

     <div className="flex flex-col md:flex-row px-4 sm:px-6 md:px-10 py-6 md:py-10 gap-6 md:gap-10 font-sans">
        {/* SIDEBAR */}
        <div className="w-full md:w-[260px] text-[#6a0610] md:mb-0">

          <h3 className="text-lg font-semibold mb-4">Browse by</h3>
          <hr className="border-red-200 my-3" />

          <ul className="text-sm pb-6 flex md:block gap-4 md:gap-0 overflow-x-auto md:overflow-visible whitespace-nowrap">
            <li onClick={() => setSelectedCategory("all")} className="cursor-pointer">All Products</li>
            <li onClick={() => setSelectedCategory("cleanse")} className="cursor-pointer">Cleanse</li>
            <li onClick={() => setSelectedCategory("hydrate")} className="cursor-pointer">Hydrate</li>
            <li onClick={() => setSelectedCategory("protect")} className="cursor-pointer">Protect</li>
          </ul>

          {/* PRICE FILTER */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Filter by</h3>
            <hr className="border-red-200 my-3" />

            <input
              type="range"
              min="15"
              max="100"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full accent-[#6a0610]"
            />

            <div className="flex justify-between text-xs mt-2">
              <span>$15</span>
              <span>${price}</span>
            </div>
          </div>
        </div>

        {/* PRODUCTS AREA */}
        <div className="flex-1">

          {/* SORT */}
          <div className="relative flex justify-start md:justify-end mb-6">
            <div
              onClick={() => setOpenSort(!openSort)}
              className="cursor-pointer text-[#6a0610] flex items-center gap-2"
            >
              Sort by: {sort.replace("-", " ")} ▲
            </div>

            {openSort && (
              <div className="absolute top-8 right-0 bg-white w-[220px] shadow-lg border border-gray-300 z-50">
                {["recommended", "newest", "low-high", "high-low", "a-z", "z-a"].map((type) => (
                  <div
                    key={type}
                    onClick={() => {
                      setSort(type);
                      setOpenSort(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {type}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductPageCard
                key={product.id}
                product={product}
                showNewTag={true}
              />
            ))}
          </div>

        </div>
      </div>
    </>
  );
}