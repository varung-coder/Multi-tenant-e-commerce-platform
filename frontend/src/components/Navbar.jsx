import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logout Successful");

    navigate("/login");
  };

  const handleSearch = () => {
  const searchText = search.trim();

  if (searchText) {
    window.location.href = `/products?search=${encodeURIComponent(searchText)}`;
  }
};

  return (
    <nav className="navbar">

      <div className="logo">
        <h2>ShopEase</h2>
      </div>

      <div className="search-box">
        <input
  type="text"
  placeholder="🔍 Search products..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }}
/>
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>

        {token && (
          <li>
            <Link to="/orders">My Orders</Link>
          </li>
        )}

        {token ? (
          <li>
            <button
              onClick={handleLogout}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "#222",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}

      </ul>

      <div className="nav-icons">
        <span>🛒</span>
        <span>👤</span>
      </div>

    </nav>
  );
}

export default Navbar;