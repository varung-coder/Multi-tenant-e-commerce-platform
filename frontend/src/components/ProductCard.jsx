function ProductCard({ image, title, price }) {
  return (
    <div className="product-card">

      <span className="badge">Best Seller</span>

      <span className="discount-badge">20% OFF</span>

      <img
        src={image}
        alt={title}
        className="product-image"
      />

      <h3>{title}</h3>

      <div className="rating">⭐⭐⭐⭐⭐</div>

      <p>{price}</p>

      <div className="product-actions">
        <button className="buy-btn">Buy Now</button>
        <button className="cart-btn">Add to Cart</button>
      </div>

    </div>
  );
}

export default ProductCard;