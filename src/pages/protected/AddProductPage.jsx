import React, { useState, useEffect } from 'react';
import { adicionarProduto } from '../../services/api/crudProduct';
import { listarCategorias } from '../../services/api/crudCategory';
import { useNavigate } from 'react-router-dom';

const AddProductPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [categoria, setCategoria] = useState('');
  const [caracteristica, setCaracteristica] = useState('');
  const [categorias, setCategorias] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const carregarCategorias = async () => {
      setCategorias(await listarCategorias());
    };
    carregarCategorias();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description || !price || !categoria || !caracteristica) {
      alert("Todos os campos são obrigatórios!");
      return;
    }

    await adicionarProduto({ name, description, price: parseFloat(price), categoria, caracteristica });
    alert("Produto cadastrado com sucesso!");
    navigate('/products');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Cadastrar Produto</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" className="w-full p-2 border rounded-md" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição" className="w-full p-2 border rounded-md" />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Preço" className="w-full p-2 border rounded-md" />

        <select value={categoria} onChange={(e) => setCategoria(e.target.value)} className="w-full p-2 border rounded-md">
          <option value="">Selecione uma Categoria</option>
          {categorias.map(cat => (
            <option key={cat.id} value={cat.nome}>{cat.nome}</option>
          ))}
        </select>

        <select value={caracteristica} onChange={(e) => setCaracteristica(e.target.value)} className="w-full p-2 border rounded-md">
          <option value="">Selecione uma Característica</option>
          <option value="Ofertas Especiais">Ofertas Especiais</option>
          <option value="Mais Vendidos">Mais Vendidos</option>
          <option value="Recomendações">Recomendações</option>
          <option value="Comum">Comum</option>
        </select>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">Cadastrar Produto</button>
      </form>
    </div>
  );
};

export default AddProductPage;
