import React from "react";

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="border text-white rounded-lg shadow-md p-4 hover:shadow-xl transition">
      <img src={image} alt={name} className="h-40 w-full object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{name}</h2>
      <p className="text-sm mt-1">${price}</p>
      <button className="mt-5 w-full text-black bg-white py-2 rounded hover:bg-gray-400 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
