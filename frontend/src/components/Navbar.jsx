function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <h2>ShopEase</h2>
      </div>

      <div className="search-box">
        <input
           type="text"
           placeholder="🔍 Search products..."
        />
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Categories</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="nav-icons">
        <span>🛒</span>
        <span>👤</span>
      </div>

    </nav>
  );
}

export default Navbar;