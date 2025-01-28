import React from "react";
import ProductCard from "../components/ProductCard";
import { sections } from "../data/productData";

const HomePage = () => {
  return (
    <div className="bg-gray-50 py-8">
      {sections.map((section, index) => (
        <section key={index} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            {section.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {section.products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default HomePage;
