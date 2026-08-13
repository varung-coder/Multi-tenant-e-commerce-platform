import { FaHeart } from "react-icons/fa";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

import { useEffect, useState } from "react";
import API from "../api/api";

import hero from "../assets/hero.png";
import headphones from "../assets/headphones.jpg";
import smartwatch from "../assets/smartwatch.jpg";
import shoes from "../assets/shoes.jpg";
import chair from "../assets/chair.jpg";
import samsungS24 from "../assets/samsung-s24.jpg";
import speaker from "../assets/speaker.jpg";
import hoodie from "../assets/hoodie.jpg";
import gamingMouse from "../assets/gaming-mouse.jpg";
import mechanicalKeyboard from "../assets/mechanical-keyboard.jpg";
import laptopBackpack from "../assets/laptop-backpack.jpg";
import sunglasses from "../assets/sunglasses.jpg";
import mensCasualShirt from "../assets/mens-casual-shirt.jpg";
import coffeeMaker from "../assets/coffee-maker.jpg";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");

      console.log(res.data);
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

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

          {products.map((product) => (

            <ProductCard
              key={product._id}
              id={product._id}
              image={
                product.name === "Samsung Galaxy S24"
                  ? samsungS24
                  : product.name === "Wireless Headphones"
                  ? headphones
                  : product.name === "Smart Watch"
                  ? smartwatch
                  : product.name === "Bluetooth Speaker"
                  ? speaker
                  : product.name === "Running Shoes"
                  ? shoes
                  : product.name === "Premium Hoodie"
                  ? hoodie
                  : product.name === "Gaming Mouse"
                  ? gamingMouse
                  : product.name === "Mechanical Keyboard"
                  ? mechanicalKeyboard
                  : product.name === "Laptop Backpack"
                  ? laptopBackpack
                  : product.name === "Sunglasses"
                  ? sunglasses
                  : product.name === "Men's Casual Shirt"
                  ? mensCasualShirt
                  : product.name === "Coffee Maker"
                  ? coffeeMaker
                  : product.image
              }
              title={product.name}
              price={`₹${product.price}`}
            />

          ))}

        </div>

      </section>

      <section className="why-us">

        <h2>Why Choose ShopEase?</h2>

        <div className="why-container">

          <div className="why-card">
            <h3>🚚 Fast Delivery</h3>
            <p>Get your orders delivered quickly across India.</p>
          </div>

          <div className="why-card">
            <h3>🔒 Secure Payments</h3>
            <p>100% safe and trusted payment methods.</p>
          </div>

          <div className="why-card">
            <h3>⭐ Trusted Sellers</h3>
            <p>Shop from verified sellers with great ratings.</p>
          </div>

          <div className="why-card">
            <h3>💬 24/7 Support</h3>
            <p>Our team is always ready to help you.</p>
          </div>

        </div>

      </section>

      <section className="testimonials">

        <h2>What Our Customers Say</h2>

        <div className="testimonial-container">

          <div className="testimonial-card">
            <p>
              ⭐⭐⭐⭐⭐
              <br />
              Amazing shopping experience! Fast delivery and genuine products.
            </p>
            <h4>- Rahul Sharma</h4>
          </div>

          <div className="testimonial-card">
            <p>
              ⭐⭐⭐⭐⭐
              <br />
              Best multi-vendor platform. Easy ordering and secure payment.
            </p>
            <h4>- Priya Verma</h4>
          </div>

          <div className="testimonial-card">
            <p>
              ⭐⭐⭐⭐⭐
              <br />
              Excellent customer support. Highly recommended!
            </p>
            <h4>- Aman Gupta</h4>
          </div>

        </div>

      </section>

      <section className="newsletter">

        <h2>Subscribe to Our Newsletter</h2>

        <p>
          Get the latest offers, discounts and new arrivals directly in your inbox.
        </p>

        <div className="newsletter-box">

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Subscribe
          </button>

        </div>

      </section>

      <section className="stats">

        <div className="stat-box">
          <h2>10K+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat-box">
          <h2>500+</h2>
          <p>Trusted Sellers</p>
        </div>

        <div className="stat-box">
          <h2>50K+</h2>
          <p>Products</p>
        </div>

        <div className="stat-box">
          <h2>99%</h2>
          <p>Customer Satisfaction</p>
        </div>

      </section>

      <section className="brands">

        <h2>Our Trusted Brands</h2>

        <div className="brand-container">

          <div className="brand-card">Apple</div>
          <div className="brand-card">Samsung</div>
          <div className="brand-card">Nike</div>
          <div className="brand-card">Adidas</div>
          <div className="brand-card">Sony</div>

        </div>

      </section>

      <footer className="footer">
        <p>© 2026 ShopEase. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Home;