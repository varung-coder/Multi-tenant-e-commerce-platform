import Navbar from "../components/Navbar";
import hero from "../assets/hero.png";

function Home() {
  return (
    <>
      <Navbar />

  <section className="hero">
   <div className="hero-content">
    <h1>Welcome to ShopEase</h1>

    <h2>
      Buy From Multiple Stores
      <br />
      In One Platform
    </h2>

    <p>
      Discover thousands of products from trusted sellers
      with fast delivery and secure payments.
    </p>

    <button className="hero-btn">
      Shop Now
    </button>
   </div>

  <div className="hero-image">
    <img src={hero} alt="Shopping" />
  </div>
</section>
<section className="categories">

  <h2>Shop by Category</h2>

  <div className="category-container">

    <div className="category-card">
      <h3>Electronics</h3>
      <p>Latest gadgets and devices</p>
    </div>

    <div className="category-card">
      <h3>Fashion</h3>
      <p>Trendy clothing and accessories</p>
    </div>

    <div className="category-card">
      <h3>Home & Living</h3>
      <p>Furniture and home essentials</p>
    </div>

    <div className="category-card">
      <h3>Groceries</h3>
      <p>Fresh food and daily needs</p>
    </div>

   </div>

</section>
<section className="products">

  <h2>Featured Products</h2>

  <div className="product-container">

    <div className="product-card">
      <h3>Wireless Headphones</h3>
      <p>₹2,499</p>
      <button>Add to Cart</button>
    </div>

    <div className="product-card">
      <h3>Smart Watch</h3>
      <p>₹3,999</p>
      <button>Add to Cart</button>
    </div>

    <div className="product-card">
      <h3>Running Shoes</h3>
      <p>₹2,199</p>
      <button>Add to Cart</button>
    </div>

    <div className="product-card">
      <h3>Office Chair</h3>
      <p>₹5,499</p>
      <button>Add to Cart</button>
    </div>

  </div>

 </section>
<section className="features">

  <h2>Why Choose ShopEase?</h2>

  <div className="feature-container">

    <div className="feature-card">
      <h3>🚚 Fast Delivery</h3>
      <p>Get your orders delivered quickly across India.</p>
    </div>

    <div className="feature-card">
      <h3>🔒 Secure Payments</h3>
      <p>100% safe and secure online payment methods.</p>
    </div>

    <div className="feature-card">
      <h3>🎧 24/7 Support</h3>
      <p>Our support team is available anytime to help you.</p>
    </div>

  </div>

  </section>
      
      <footer className="footer">
       <p>© 2026 ShopEase. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Home;