import React, { useEffect, useState } from 'react';
import { listarProdutos, excluirProduto } from '../../services/api/crudProduct';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const carregarProdutos = async () => {
    const produtosListados = await listarProdutos();
    setProdutos(produtosListados);
    setLoading(false);
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este produto?")) {
      await excluirProduto(id);
      setProdutos(produtos.filter(produto => produto.id !== id));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Lista de Produtos</h2>

      <div className="flex justify-end mb-4">
        <button
          onClick={() => navigate('/add-product')}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-all"
        >
          + Cadastrar Produto
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center my-10">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
        </div>
      ) : produtos.length === 0 ? (
        <p className="text-center text-gray-600 mt-6">Sem produtos para exibir.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {produtos.map(produto => (
            <div key={produto.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{produto.name}</h3>
                <p className="text-gray-700">{produto.description}</p>
                <p className="text-lg font-bold text-blue-600 mt-2">R$ {produto.price}</p>
              </div>
              <button
                onClick={() => handleDelete(produto.id)}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-all duration-200"
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
