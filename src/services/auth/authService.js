// src/database/authService.js
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from './auth'; // A instância de autenticação do Firebase

const provider = new GoogleAuthProvider();

// Função para login com Google
const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider); // Realiza o login com Google
    console.log('Usuário logado:', result.user); // Exibe as informações do usuário logado
  } catch (error) {
    console.error('Erro no login com Google:', error); // Exibe erro caso falhe
    throw error; // Propaga o erro
  }
};

export { loginWithGoogle };
