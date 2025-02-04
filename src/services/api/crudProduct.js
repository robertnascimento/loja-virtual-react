import { db } from '../auth/auth';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

const produtosCollection = collection(db, 'produtos');

// Função para listar os produtos
export const listarProdutos = async () => {
  try {
    const querySnapshot = await getDocs(produtosCollection);
    const produtos = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name || 'Produto sem nome',
        description: data.description || 'Sem descrição',
        price: data.price || 0,
        categoria: data.categoria || 'Sem categoria',
        caracteristica: data.caracteristica || 'Comum' // Padrão: Comum
      };
    });
    return produtos;
  } catch (error) {
    console.error("Erro ao listar os produtos:", error);
    return [];
  }
};

// Função para adicionar um novo produto
export const adicionarProduto = async (produto) => {
  try {
    // Verifica se todos os campos obrigatórios estão preenchidos
    if (!produto.name || !produto.description || !produto.price || !produto.categoria || !produto.caracteristica) {
      throw new Error("Todos os campos são obrigatórios!");
    }

    await addDoc(produtosCollection, produto);
    console.log("Produto adicionado com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar produto:", error);
  }
};

// Função para excluir um produto
export const excluirProduto = async (id) => {
  try {
    const produtoDoc = doc(db, 'produtos', id);
    await deleteDoc(produtoDoc);
    console.log("Produto excluído com sucesso");
  } catch (error) {
    console.error("Erro ao excluir o produto:", error);
  }
};
