import Navbar from "../components/Navbar";

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
      </section>
      
      <footer className="footer">
       <p>© 2026 ShopEase. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Home;