import React from "react";
import { FiPlus } from "react-icons/fi";
 import { Link } from "react-router-dom";
import toast from "react-hot-toast";



const ProductCard = ({ product }) => {
  return (
    <div className="group">

      {/* Image */}
      <div className="relative bg-[#f6f4ef] rounded-lg h-[200px] overflow-hidden">

        <img
          src={product.image1}
          className="absolute inset-0 w-full sm:h-[220px] h-full object-cover rounded transition-opacity duration-500 group-hover:opacity-0"
        />

        <img
          src={product.image2}
          className="absolute inset-0 w-full sm:h-[220px] h-full object-cover rounded opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Quick Add Button */}
        <Link to='/products' className="absolute bottom-2 right-2 cursor-pointer bg-white p-1 rounded shadow opacity-0 group-hover:opacity-100 transition">
          <FiPlus />
        </Link>

      </div>

      {/* Info */}
      <div className="mt-2 text-sm">
       

<Link to={`/product/${product.id}`}>
 <h3 className="text-sm sm:text-base font-medium text-[#6a0610] truncate">
  {product.name}
</h3>
</Link>
        <p className="text-gray-600">${product.price}</p>

        <div className="flex gap-2 mt-1">
          {product.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs border border-[#6a0610] font-sans rounded text-[#6a0610] px-2 py-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductCard;