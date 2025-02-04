// src/components/Header.jsx
import React from 'react';
import useAuth from '../../services/auth/useAuth';
import auth from '../../services/auth/auth';

const Header = () => {
  const user = useAuth(); // Pega o usuário logado

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Faz o logout
    } catch (error) {
      console.error('Erro no logout:', error); // Exibe erro caso falhe
    }
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold">
        <h1>Riiver Store</h1>
      </div>
      <nav>
        <ul className="flex gap-6">
          <li>
            <a href="/" className="hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="/products" className="hover:text-gray-400">Produtos</a>
          </li>
          <li>
            <a href="/cart" className="hover:text-gray-400">Carrinho</a>
          </li>
          {user ? (
            <li className="flex items-center gap-2">
              <img
                src={user.photoURL} // Foto do usuário
                alt={user.displayName}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm">{user.displayName}</span> {/* Nome do usuário */}
              <button onClick={handleLogout} className="text-blue-500">Sair</button>
            </li>
          ) : (
            <li>
              <a href="/login" className="hover:text-gray-400">Login</a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;