import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../api/api";
import "./Cart.css";

import headphones from "../assets/headphones.jpg";
import smartwatch from "../assets/smartwatch.jpg";
import speaker from "../assets/speaker.jpg";
import shoes from "../assets/shoes.jpg";
import samsungS24 from "../assets/samsung-s24.jpg";
import hoodie from "../assets/hoodie.jpg";

import gamingMouse from "../assets/gaming-mouse.jpg";
import mechanicalKeyboard from "../assets/mechanical-keyboard.jpg";
import laptopBackpack from "../assets/laptop-backpack.jpg";
import sunglasses from "../assets/sunglasses.jpg";
import mensCasualShirt from "../assets/mens-casual-shirt.jpg";
import coffeeMaker from "../assets/coffee-maker.jpg";

function Cart() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      fetchCart();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchCart = async () => {
    try {
      const res = await API.get(`/cart/${user.id}`);
      setCart(res.data.cart);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (cartId) => {
    try {
      const res = await API.delete(`/cart/remove/${cartId}`);

      alert(res.data.message);

      fetchCart();
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Failed to remove product"
      );
    }
  };

  const updateQuantity = async (cartId, newQuantity) => {
    if (newQuantity < 1) {
      return;
    }

    try {
      await API.put(`/cart/update/${cartId}`, {
        quantity: newQuantity,
      });

      fetchCart();
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Failed to update quantity"
      );
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <section className="cart-page">
          <h1>My Shopping Cart</h1>
          <p>Loading cart...</p>
        </section>
      </>
    );
  }

  if (!user) {
    return (
      <>
        <Navbar />

        <section className="cart-page">

          <h1>My Shopping Cart</h1>

          <div className="empty-cart">

            <h2>🔐 Please Login</h2>

            <p>
              Please login to view your shopping cart.
            </p>

            <button
              className="shop-btn"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

          </div>

        </section>
      </>
    );
  }

  if (cart.length === 0) {
    return (
      <>
        <Navbar />

        <section className="cart-page">

          <h1>My Shopping Cart</h1>

          <div className="empty-cart">

            <h2>🛒 Your Cart is Empty</h2>

            <p>
              Looks like you haven't added anything to your cart yet.
            </p>

            <button
              className="shop-btn"
              onClick={() => navigate("/products")}
            >
              Continue Shopping
            </button>

          </div>

        </section>
      </>
    );
  }

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.product.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <section className="cart-page">

        <h1>My Shopping Cart</h1>

        <section className="cart-items">

          {cart.map((item) => (

            <div className="cart-card" key={item._id}>

              <img
                src={
                  item.product.name === "Samsung Galaxy S24"
                    ? samsungS24
                    : item.product.name === "Wireless Headphones"
                    ? headphones
                    : item.product.name === "Smart Watch"
                    ? smartwatch
                    : item.product.name === "Bluetooth Speaker"
                    ? speaker
                    : item.product.name === "Running Shoes"
                    ? shoes
                    : item.product.name === "Premium Hoodie"
                    ? hoodie
                    : item.product.name === "Gaming Mouse"
                    ? gamingMouse
                    : item.product.name === "Mechanical Keyboard"
                    ? mechanicalKeyboard
                    : item.product.name === "Laptop Backpack"
                    ? laptopBackpack
                    : item.product.name === "Sunglasses"
                    ? sunglasses
                    : item.product.name === "Men's Casual Shirt"
                    ? mensCasualShirt
                    : item.product.name === "Coffee Maker"
                    ? coffeeMaker
                    : item.product.image
                }
                alt={item.product.name}
              />

              <div className="cart-details">

                <h3>{item.product.name}</h3>

                <p>
                  ₹{item.product.price * item.quantity}
                </p>

                <div className="quantity">

                  <button
                    onClick={() =>
                      updateQuantity(
                        item._id,
                        item.quantity - 1
                      )
                    }
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQuantity(
                        item._id,
                        item.quantity + 1
                      )
                    }
                  >
                    +
                  </button>

                </div>

                <button
                  className="delete-btn"
                  onClick={() => removeItem(item._id)}
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

        </section>

        <section className="cart-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <span>Free</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>₹{subtotal}</span>
          </div>

          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>

        </section>

      </section>
    </>
  );
}

export default Cart;