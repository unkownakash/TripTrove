import React, { useState } from "react";
import { FaTruck, FaCheckCircle } from "react-icons/fa";

const ShoppingCart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Men Mesh ETPU Walking Shoes",
      brand: "Red Tape",
      price: 2309,
      originalPrice: 7699,
      discount: 70,
      size: 10,
      qty: 1,
      img: "https://via.placeholder.com/150", // Replace with actual image URL
    },
  ]);

  const [coupon, setCoupon] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const platformFee = 20;

  const applyCoupon = () => {
    setDiscountApplied(true);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Delivery Address */}
      <div className="p-4 border rounded-lg bg-gray-100 mb-4">
        <p className="font-bold text-gray-900">
          Deliver to: <span className="text-orange-500">Akash Aggarwal, 121004</span>
        </p>
        <p className="text-gray-600 text-sm">
          Jeevan Colony Part 2, Near Aggarwal Medical Center, Ballabgarh, Faridabad
        </p>
        <button className="mt-2 text-sm text-orange-500 font-semibold border border-orange-500 px-4 py-1 rounded-md">
          Change Address
        </button>
      </div>

      {/* Offers */}
      <div className="p-4 border rounded-lg bg-gray-100 mb-4">
        <p className="font-bold text-gray-800">Available Offers</p>
        <p className="text-gray-600 text-sm">
          🔥 10% Instant Discount on Axis Bank Credit Card EMI on a min spend of ₹3,500.
        </p>
      </div>

      {/* Cart Items */}
      <div className="border-b pb-4 mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-3">🛒 1/1 ITEMS SELECTED</h3>
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
            {/* Image */}
            <img src={item.img} alt={item.name} className="w-24 h-24 rounded-lg object-cover" />
            
            {/* Details */}
            <div className="flex-1 px-4">
              <p className="text-lg font-semibold text-gray-800">{item.brand}</p>
              <p className="text-sm text-gray-600">{item.name}</p>
              <p className="text-sm text-gray-500">Size: {item.size} | Qty: {item.qty}</p>
              <p className="text-lg font-bold text-orange-500">₹{item.price} <span className="line-through text-gray-400 text-sm">₹{item.originalPrice}</span></p>
              <p className="text-sm text-green-500">{item.discount}% OFF</p>
              <p className="text-sm flex items-center text-gray-700 mt-2"><FaTruck className="mr-2 text-orange-500" /> Express Delivery in 2 days</p>
            </div>

            {/* Remove Button */}
            <button className="text-red-500 text-sm font-semibold">Remove</button>
          </div>
        ))}
      </div>

      {/* Coupon & Pricing Details */}
      <div className="p-4 border rounded-lg bg-gray-100">
        <h3 className="font-bold text-gray-800 mb-2">💰 Apply Coupons</h3>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter Coupon Code"
            className="p-2 border rounded-l-md w-full"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button
            className="bg-orange-500 text-white px-4 rounded-r-md"
            onClick={applyCoupon}
          >
            Apply
          </button>
        </div>
        {discountApplied && <p className="text-green-500 mt-2"><FaCheckCircle className="inline-block mr-1" /> Coupon Applied!</p>}
      </div>

      {/* Pricing Details */}
      <div className="p-4 border rounded-lg mt-4">
        <h3 className="font-bold text-gray-800 mb-2">📌 Price Details (1 Item)</h3>
        <div className="flex justify-between text-gray-600">
          <span>Total MRP</span>
          <span>₹{cart[0].originalPrice}</span>
        </div>
        <div className="flex justify-between text-green-500 font-semibold">
          <span>Discount on MRP</span>
          <span>-₹{cart[0].originalPrice - cart[0].price}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Platform Fee</span>
          <span>₹{platformFee}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping Fee</span>
          <span className="text-green-500">FREE</span>
        </div>
        <div className="flex justify-between text-gray-900 font-bold text-lg mt-2">
          <span>Total Amount</span>
          <span>₹{cart[0].price + platformFee}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <button className="w-full bg-orange-500 text-white py-3 mt-4 rounded-lg text-lg font-bold hover:bg-orange-600 transition duration-300">
        PLACE ORDER
      </button>
    </div>
  );
};

export default ShoppingCart;
