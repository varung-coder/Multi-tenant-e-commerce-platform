import { Link } from "react-router-dom";
import API from "../api/api";
import "./ProductCard.css";

function ProductCard({ id, image, title, price }) {

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const res = await API.delete(`/products/delete/${id}`);

      alert(res.data.message);

      window.location.reload();

    } catch (error) {
      alert(
        error.response?.data?.message || "Failed to delete product"
      );
    }
  };


  const handleAddToCart = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first");
      return;
    }

    try {
      const res = await API.post("/cart/add", {
        user: user.id,
        product: id,
        quantity: 1,
      });

      alert(res.data.message);

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Failed to add product to cart"
      );
    }
  };


  return (
    <div className="product-card">

      <span className="badge">
        Best Seller
      </span>

      <span className="discount-badge">
        20% OFF
      </span>

      <img
        src={image}
        alt={title}
        className="product-image"
      />

      <h3>{title}</h3>

      <div className="rating">
        ⭐⭐⭐⭐⭐
      </div>

      <p>{price}</p>

      <div className="product-actions">

        <Link to={`/product/${id}`}>
          <button className="buy-btn">
            View Details
          </button>
        </Link>

        <Link to={`/edit-product/${id}`}>
          <button className="edit-btn">
            Edit
          </button>
        </Link>

        <button
          className="cart-btn"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>

        <button
          className="delete-btn"
          onClick={handleDelete}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default ProductCard;