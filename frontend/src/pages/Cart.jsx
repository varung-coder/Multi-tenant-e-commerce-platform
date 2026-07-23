import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import headphones from "../assets/headphones.jpg";

function Cart() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const price = 2499;
  return (
    <>
      <Navbar />

      <section className="cart-page">

        <h1>My Shopping Cart</h1>

        <div 
          className="empty-cart"
          style={{ display: "none" }}
        >

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
       <section className="cart-items">

        <div className="cart-card">

       <img src={headphones} alt="Headphones" />

       <div className="cart-details">
        <h3>Wireless Headphones</h3>
        <p>₹{price * quantity}</p>

       <div className="quantity">
        <button
         onClick={() => quantity > 1 && setQuantity(quantity - 1)}
        >
         -
       </button>

       <span>{quantity}</span>

       <button
        onClick={() => setQuantity(quantity + 1)}
       >
        +
       </button>
       </div>

       </div>

      </div>

     </section>
      
      <section className="cart-summary">

      <h2>Order Summary</h2>

      <div className="summary-row">
       <span>Subtotal</span>
       <span>₹{price * quantity}</span>
      </div>

      <div className="summary-row">
       <span>Delivery</span>
       <span>Free</span>
      </div>

      <div className="summary-row total">
       <span>Total</span>
       <span>₹{price * quantity}</span>
      </div>

     <button className="checkout-btn">
       Proceed to Checkout
     </button>

</section>
      </section>
    </>
  );
}

export default Cart;