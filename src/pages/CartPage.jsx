import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid"; // Importando o ícone X para Heroicons v2

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Produto 1",
      price: 100,
      imgUrl: "https://placehold.co/50x50",
    },
    {
      id: 2,
      name: "Produto 2",
      price: 200,
      imgUrl: "https://placehold.co/50x50",
    },
  ]);

  // Função para remover item do carrinho
  const removeItemFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto p-4 flex-grow">
        <h1 className="text-2xl font-semibold mb-4 text-center">Seu Carrinho</h1>

        {/* Lista de produtos no carrinho */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
            {cartItems.length > 0 ? (
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between border-b py-4"
                  >
                    {/* Imagem do produto */}
                    <img
                      src={item.imgUrl}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-full mr-4"
                    />
                    {/* Nome e preço do produto */}
                    <div className="flex-grow">
                      <span className="block font-medium">{item.name}</span>
                      <span className="block text-gray-500">
                        R${item.price}
                      </span>
                    </div>
                    {/* Botão de excluir com ícone "X" */}
                    <button
                      onClick={() => removeItemFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 font-semibold"
                    >
                      <XMarkIcon className="w-5 h-5" /> {/* Ícone de X */}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-500">Seu carrinho está vazio.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
