import React, { useEffect, useState } from 'react';
import { listarCategorias, adicionarCategoria, excluirCategoria } from '../../services/api/crudCategory';

const CategoryPage = () => {
  const [categorias, setCategorias] = useState([]);
  const [novaCategoria, setNovaCategoria] = useState('');

  useEffect(() => {
    carregarCategorias();
  }, []);

  const carregarCategorias = async () => {
    const lista = await listarCategorias();
    setCategorias(lista);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!novaCategoria) return;
    await adicionarCategoria(novaCategoria);
    setNovaCategoria('');
    carregarCategorias();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir essa categoria?')) {
      await excluirCategoria(id);
      carregarCategorias();
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Gerenciar Categorias</h2>
      <form onSubmit={handleAdd} className="flex gap-2">
        <input
          type="text"
          value={novaCategoria}
          onChange={(e) => setNovaCategoria(e.target.value)}
          placeholder="Nome da Categoria"
          className="w-full p-2 border rounded-md"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">Adicionar</button>
      </form>
      <ul className="mt-4">
        {categorias.map((categoria) => (
          <li key={categoria.id} className="flex justify-between items-center p-2 border-b">
            <span>{categoria.nome}</span>
            <button onClick={() => handleDelete(categoria.id)} className="text-red-600">Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
