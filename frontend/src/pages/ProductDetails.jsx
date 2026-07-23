import Navbar from "../components/Navbar";
import headphones from "../assets/headphones.jpg";

function ProductDetails() {
  return (
    <>
      <Navbar />

      <section className="product-details">

        <div className="product-image">
          <img src={headphones} alt="Wireless Headphones" />
        </div>

        <div className="product-info">

          <h1>Wireless Headphones</h1>

          <p className="price">₹2,499</p>

          <p className="rating">⭐⭐⭐⭐⭐ (4.8)</p>

          <p className="description">
            Enjoy crystal-clear sound quality with our premium wireless
            headphones. Long battery life, comfortable design, and deep bass
            make them perfect for music, gaming, and daily use.
          </p>

          <div className="product-specs">

          <h3>Specifications</h3>

          <ul>
            <li>🎧 Brand: ShopEase</li>
            <li>🔋 Battery Life: 40 Hours</li>
            <li>📶 Bluetooth: Version 5.3</li>
            <li>🎤 Built-in Microphone</li>
            <li>🛡 1 Year Warranty</li>
          </ul>

         </div>

         <div className="product-extra">

          <p><strong>Stock:</strong> <span className="in-stock">In Stock</span></p>

          <p><strong>Delivery:</strong> Free Delivery in 2–3 Days</p>

          <p><strong>Return Policy:</strong> 7 Days Easy Return</p>

        </div>

          <button className="add-cart-btn">
            Add to Cart
          </button>

          <button className="buy-now-btn">
            Buy Now
          </button>

        </div>

      </section>
    </>
  );
}

export default ProductDetails;