import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import React from "react";
export default function CartDrawer({ open, setOpen }) {
const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

const [promo, setPromo] = useState("");

// 1️⃣ Calculate subtotal first
const subtotal = cart.reduce(
  (acc, item) => acc + item.price * item.qty,
  0
);

// 2️⃣ Calculate discount
const discount = promo === "SAVE10" ? subtotal * 0.1 : 0;

// 3️⃣ Final total
const total = subtotal - discount;



  return (

    <div className={`fixed top-0 right-0 w-[350px] h-full bg-white shadow-lg transition ${open ? "translate-x-0" : "translate-x-full"}`}>

      <div className="p-5">

        <h2 className="text-xl font-semibold mb-4">
          Your Cart
        </h2>

        {cart.map(item => (

          <div key={item.id} className="flex gap-3 mb-4">

            <img src={item.img} className="w-16 h-16 object-cover"/>

            <div className="flex-1">

              <h4>{item.name}</h4>

              <p>${item.price}</p>

              <div className="flex gap-2 mt-2">

                <button onClick={() => decreaseQty(item.id, item.size)}>-</button>

                <span>{item.qty}</span>

                <button onClick={() => increaseQty(item.id, item.size)}>+</button>

              </div>

            </div>

            <button
              onClick={() => removeFromCart(item.id, item.size)}
            >
              ✕
            </button>

          </div>

        ))}

        {/* TOTAL */}
        <div className="border-t pt-4">
          <input
  placeholder="Enter promo code"
  value={promo}
  onChange={(e)=>setPromo(e.target.value)}
  className="border p-2 w-full mt-2"
/>

<button className="mt-2 bg-[#6a0610] text-white px-3 py-1 rounded">
  Apply
</button>

          <p className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </p>

          <p className="text-xs mt-2">
            Taxes and shipping calculated at checkout
          </p>

        </div>

      </div>

    </div>

  );
}