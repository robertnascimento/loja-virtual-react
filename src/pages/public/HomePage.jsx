import React, { useEffect, useState } from "react";
import ProductCard from "../../components/product/ProductCard";
import { listarProdutos } from "../../services/api/crudProduct";

const HomePage = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarProdutos = async () => {
    const produtosListados = await listarProdutos();
    setProdutos(produtosListados);
    setLoading(false);
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  // Agrupar produtos por característica
  const produtosPorCaracteristica = () => {
    return produtos.reduce((acc, produto) => {
      // Acessa a característica do produto, usa 'Outras' caso esteja ausente
      const caracteristica = produto.caracteristica || "Outras";

      // Inicializa a característica no acumulador, caso ainda não exista, e adiciona o produto
      acc[caracteristica] = [...(acc[caracteristica] || []), produto];

      return acc;
    }, {});
  };

  // Caso não tenha produtos, exibe o carregamento ou mensagem
  if (loading) {
    return (
      <div className="flex justify-center my-10">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  const categorias = produtosPorCaracteristica();

  return (
    <div className="bg-gray-50 py-8">
      {/* Iterando pelas categorias e exibindo os produtos */}
      {Object.keys(categorias).map((categoria) => (
        <section key={categoria} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            {categoria}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categorias[categoria].map((produto) => (
              <ProductCard key={produto.id} product={produto} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default HomePage;
