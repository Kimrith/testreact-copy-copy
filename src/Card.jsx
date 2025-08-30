import React from "react";

export default function Card({ thumbnail, price, title, rating }) {
  const click = () => {
    alert(title);
    const product = { thumbnail, price, title, rating };
    // Example: save to localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg w-100 max-sm:w-[200px] h-[200px] object-cover mx-auto"
            src={
              thumbnail || "https://flowbite.com/docs/images/blog/image-1.jpg"
            }
            alt={title || "Product image"}
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
              {title || "Undefined"}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Price: {price || "Null"}
          </p>

          {/* Rating */}
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Rating: {rating || "Null"}
          </p>

          {/* Buy Button */}
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white 
              bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none 
              focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => click()}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
