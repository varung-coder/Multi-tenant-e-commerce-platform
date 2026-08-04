import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  console.log("Navbar Token:", token);

  const handleLogout = () => {

  localStorage.removeItem("token");

  alert("Logout Successful");

  navigate("/login");

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
        />
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
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
           <li><Link to="/login">Login</Link></li>
           <li><Link to="/register">Register</Link></li>
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