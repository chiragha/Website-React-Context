import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar";

export default function CartPage() {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  const [showNote, setShowNote] = useState(false);
  const [note, setNote] = useState("");

  const [promo, setPromo] = useState("");
  const [showPromo, setShowPromo] = useState(false);
 

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const discount = promo === "SAVE10" ? subtotal * 0.1 : 0;
  const delivery = 5;
  const total = subtotal - discount + delivery;

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center px-4">
  <h2 className="text-xl sm:text-2xl font-semibold mb-3">
    Your Cart is Empty 🛒
  </h2>

  <p className="text-gray-500 mb-5 text-sm sm:text-base">
    Looks like you haven’t added anything yet.
  </p>

  <Link
    to="/products"
    className="bg-[#6a0610] text-white px-6 py-3 rounded-full hover:bg-[#8a0c1b] transition"
  >
    Continue Shopping
  </Link>
</div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 md:py-10 px-4 sm:px-6 md:px-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8">
          Your Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT SIDE → CART ITEMS */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-4 border-b pb-5"
              >
                {/* IMAGE */}
                <img
                  src={item.img}
                  className="w-full sm:w-24 h-48 sm:h-24 object-cover rounded"
                />

                {/* DETAILS */}
                <div className="flex-1">
                  <h3 className="font-medium text-sm sm:text-base">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm">${item.price}</p>

                  {/* QTY */}
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => decreaseQty(item.id, item.size)}
                      className="border px-2 py-1"
                    >
                      -
                    </button>

                    <span>{item.qty}</span>

                    <button
                      onClick={() => increaseQty(item.id, item.size)}
                      className="border px-2 py-1"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* PRICE + REMOVE */}
                <div className="flex sm:block justify-between items-center">
                  <p className="font-semibold text-sm sm:text-base">
                    ${(item.price * item.qty).toFixed(2)}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="text-red-500 text-xs sm:text-sm mt-0 sm:mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* PROMO + NOTE */}
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
  <input
    placeholder="Enter promo code"
    value={promo}
    onChange={(e) => setPromo(e.target.value)}
    className="border p-2 flex-1 rounded"
  />

  <button className="bg-[#6a0610] text-white px-4 py-2 rounded">
    Apply
  </button>
</div>

            {showPromo && (
              <div className="mt-3">
                <div className="mt-6 flex gap-4">
                  <input
                    placeholder="Enter promo code"
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                    className="border-1 p-2 flex-1"
                  />

                  <button className="bg-[#6a0610] text-white px-4 cursor-pointer rounded">
                    Apply
                  </button>
                </div>
              </div>
            )}

            <div
              onClick={() => setShowNote(!showNote)}
              className="flex items-center justify-between border rounded-md p-3 mt-4 cursor-pointer"
            >
              <div className="flex items-center gap-2 text-sm text-gray-700">
                📝 <span>Add a note</span>
              </div>

              <span className="text-[#6a0610] text-sm">
                {showNote ? "Close" : "Add"}
              </span>
            </div>
            {showNote && (
              <div className="mt-3">
                <textarea
                  placeholder="Write a note for your order..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full border rounded p-2 text-sm"
                  rows="3"
                />
              </div>
            )}
          </div>

          <div className="border p-5 md:p-6 rounded-lg h-fit lg:sticky lg:top-24">
  <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

  <div className="space-y-3 text-sm sm:text-base">
    <div className="flex justify-between">
      <span>Subtotal</span>
      <span>${subtotal.toFixed(2)}</span>
    </div>

    <div className="flex justify-between">
      <span>Delivery</span>
      <span>${delivery}</span>
    </div>

    <div className="flex justify-between text-green-600">
      <span>Discount</span>
      <span>-${discount.toFixed(2)}</span>
    </div>

    <div className="border-t pt-3 flex justify-between font-bold text-base sm:text-lg">
      <span>Total</span>
      <span>${total.toFixed(2)}</span>
    </div>
  </div>

  <button className="mt-6 w-full bg-[#6a0610] text-white py-3 rounded hover:bg-[#8a0c1b] transition">
    Checkout
  </button>

  <p className="text-xs text-gray-500 mt-3 text-center">
    🔒 Secure Checkout
  </p>
</div>
        </div>
      </div>
    </>
  );
}
