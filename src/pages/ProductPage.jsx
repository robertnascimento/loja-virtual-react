import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description for product 1",
      image: "https://placehold.co/600x400",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description for product 2",
      image: "https://placehold.co/600x400",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description for product 3",
      image: "https://placehold.co/600x400",
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description for product 4",
      image: "https://placehold.co/600x400",
    },
    {
      id: 5,
      name: "Product 1",
      description: "Description for product 4",
      image: "https://placehold.co/600x400",
    },
    {
      id: 6,
      name: "Product 6",
      description: "Description for product 6",
      image: "https://placehold.co/600x400",
    },
    {
      id: 7,
      name: "Product 7",
      description: "Description for product 7",
      image: "https://placehold.co/600x400",
    },
    {
      id: 8,
      name: "Product 8",
      description: "Description for product 8",
      image: "https://placehold.co/600x400",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Todos os Produtos</h1>

        {/* Barra de pesquisa */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Pesquisar por nome..."
            className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="border-b border-gray-300 mb-6"></div>
        <section className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="col-span-full text-center">
                Nenhum produto encontrado.
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
