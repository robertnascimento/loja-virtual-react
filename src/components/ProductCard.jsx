import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card border p-4 m-2 rounded shadow">
      <img
        src={product.image}
        alt="Product"
        className="w-full h-48 object-cover"
      />
      <h3 className="mt-2 text-xl">{product.name}</h3>
      <p className="text-gray-500">{product.description}</p>
      <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
