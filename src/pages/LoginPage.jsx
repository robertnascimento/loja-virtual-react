import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Redireciona para a página inicial
    navigate('/');
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>

        <form onSubmit={handleLogin}>
          {/* Campo Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 mt-1 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Campo Senha */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 mt-1 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Botão de Login */}
          <button
            type="submit"
            className="w-full p-2 rounded text-white bg-blue-500 hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        {/* Botão para redirecionar para a página de Cadastro */}
        <div className="mt-4 text-center">
          <button
            onClick={handleRegisterRedirect}
            className="text-blue-500 hover:text-blue-600"
          >
            Não tem uma conta? Cadastre-se
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
