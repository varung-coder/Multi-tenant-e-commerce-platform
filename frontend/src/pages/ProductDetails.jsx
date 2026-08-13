import Navbar from "../components/Navbar";

import headphones from "../assets/headphones.jpg";
import samsungS24 from "../assets/samsung-s24.jpg";
import smartwatch from "../assets/smartwatch.jpg";
import speaker from "../assets/speaker.jpg";
import shoes from "../assets/shoes.jpg";
import hoodie from "../assets/hoodie.jpg";

import gamingMouse from "../assets/gaming-mouse.jpg";
import mechanicalKeyboard from "../assets/mechanical-keyboard.jpg";
import laptopBackpack from "../assets/laptop-backpack.jpg";
import sunglasses from "../assets/sunglasses.jpg";
import mensCasualShirt from "../assets/mens-casual-shirt.jpg";
import coffeeMaker from "../assets/coffee-maker.jpg";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/api";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await API.get(`/products/${id}`);
      console.log("Product Response:", res.data);
      setProduct(res.data.product);
    } catch (error) {
      console.log(error);
    }
  };

  if (!product) {
    return <h2>Loading...</h2>;
  }

  const productImage =
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
      : product.image;

  const handleAddToCart = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login to add products to cart");
      navigate("/login");
      return;
    }

    try {
      const res = await API.post("/cart/add", {
        user: user.id,
        product: product._id,
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

  const handleBuyNow = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    try {
      await API.post("/cart/add", {
        user: user.id,
        product: product._id,
        quantity: 1,
      });

      navigate("/checkout");
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Failed to proceed"
      );
    }
  };

  return (
    <>
      <Navbar />

      <section className="product-details">

        <div className="product-image">
          <img
            src={productImage}
            alt={product.name}
          />
        </div>

        <div className="product-info">

          <h1>{product.name}</h1>

          <p className="price">
            ₹{product.price}
          </p>

          <p className="rating">
            ⭐⭐⭐⭐⭐ (4.8)
          </p>

          <p className="description">
            {product.description}
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

            <p>
              <strong>Stock:</strong>

              <span className="in-stock">
                {product.stock > 0
                  ? " In Stock"
                  : " Out of Stock"}
              </span>
            </p>

            <p>
              <strong>Delivery:</strong>{" "}
              Free Delivery in 2–3 Days
            </p>

            <p>
              <strong>Return Policy:</strong>{" "}
              7 Days Easy Return
            </p>

          </div>

          <button
            className="add-cart-btn"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

          <button
            className="buy-now-btn"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>

        </div>

      </section>
    </>
  );
}

export default ProductDetails;