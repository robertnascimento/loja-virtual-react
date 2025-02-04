// src/database/crudService.js
import { db } from '../auth/auth';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

const categoriaCollection = collection(db, 'categorias');

// Adicionar nova categoria
export const adicionarCategoria = async (categoria) => {
  await addDoc(categoriaCollection, { nome: categoria });
};

// Listar todas as categorias
export const listarCategorias = async () => {
  const snapshot = await getDocs(categoriaCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Excluir categoria
export const excluirCategoria = async (id) => {
  await deleteDoc(doc(db, 'categorias', id));
};
