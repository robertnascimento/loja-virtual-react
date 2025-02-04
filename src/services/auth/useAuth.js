// src/database/useAuth.js
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import auth from './auth'; // A instância de autenticação do Firebase

// Hook para monitorar o estado do usuário
const useAuth = () => {
  const [user, setUser] = useState(null); // Estado para armazenar o usuário logado

  useEffect(() => {
    // Monitora as mudanças no estado de autenticação do Firebase
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Atualiza o estado com o usuário logado
    });

    // Limpa o listener quando o componente for desmontado
    return () => unsubscribe();
  }, []); // O hook só será executado uma vez quando o componente for montado

  return user; // Retorna o usuário logado (ou null se não houver)
};

export default useAuth;
