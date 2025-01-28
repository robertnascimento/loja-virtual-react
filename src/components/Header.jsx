const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold">
        <h1>Riiver Store</h1>
      </div>
      <nav>
        <ul className="flex gap-6">
          <li>
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="/products" className="hover:text-gray-400">
              Produtos
            </a>
          </li>
          <li>
            <a href="/cart" className="hover:text-gray-400">
              Carrinho
            </a>
          </li>
          <li>
            <a href="/login" className="hover:text-gray-400">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
