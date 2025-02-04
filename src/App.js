// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/public/HomePage';
import LoginPage from './pages/public/LoginPage';
import RegisterPage from './pages/public/RegisterPage';
import ProductPage from './pages/public/ProductListPage';
import CartPage from './pages/public/CartPage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import AddProductPage from './pages/protected/AddProductPage';
import AddCategoryPage from './pages/protected/AddCategoryPage';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/cadastrar-categoria" element={<AddCategoryPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;