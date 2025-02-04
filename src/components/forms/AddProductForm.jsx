// src/components/AddProductForm.jsx
import React, { useState } from 'react';
import { adicionarProduto } from '../../services/api/crudService';

const AddProductForm = ({ onProductAdded }) => {
  const [produto, setProduto] = useState({
    name: '',
    description: '',
    price: ''
  });

  const handleChange = (e) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!produto.name || !produto.description || !produto.price) {
      alert("Preencha todos os campos!");
      return;
    }

    await adicionarProduto({
      ...produto,
      price: Number(produto.price) // Converte para número
    });

    setProduto({ name: '', description: '', price: '' });
    onProductAdded(); // Atualiza a lista de produtos na página
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Adicionar Produto</h3>
      <input
        type="text"
        name="name"
        placeholder="Nome do Produto"
        value={produto.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Descrição"
        value={produto.description}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Preço"
        value={produto.price}
        onChange={handleChange}
        required
      />
      <button type="submit">Cadastrar Produto</button>
    </form>
  );
};

export default AddProductForm;
