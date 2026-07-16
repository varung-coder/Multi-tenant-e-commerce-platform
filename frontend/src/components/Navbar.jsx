function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <h2>ShopEase</h2>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Categories</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="login-btn">
        Login
      </button>

    </nav>
  );
}

export default Navbar;