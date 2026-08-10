import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../api/api";
import "./Checkout.css";

function Checkout() {
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

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.product.price * item.quantity,
    0
  );

  const placeOrder = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }

    try {
      const products = cart.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
      }));

      const res = await API.post("/orders/create", {
        user: user.id,
        products,
        totalPrice,
      });

      alert(res.data.message);

      navigate("/");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Failed to place order"
      );
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <section className="checkout-page">
          <h1>Checkout</h1>
          <p>Loading...</p>
        </section>
      </>
    );
  }

  if (!user) {
    return (
      <>
        <Navbar />

        <section className="checkout-page">

          <h1>Checkout</h1>

          <p>Please login to continue.</p>

          <button
            onClick={() => navigate("/login")}
          >
            Login
          </button>

        </section>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="checkout-page">

        <h1>Checkout</h1>

        <div className="checkout-box">

          <h2>Order Summary</h2>

          {cart.map((item) => (
            <div
              className="checkout-item"
              key={item._id}
            >
              <span>
                {item.product.name} × {item.quantity}
              </span>

              <span>
                ₹{item.product.price * item.quantity}
              </span>
            </div>
          ))}

          <div className="checkout-total">
            <strong>Total</strong>
            <strong>₹{totalPrice}</strong>
          </div>

          <button
            className="place-order-btn"
            onClick={placeOrder}
          >
            Place Order
          </button>

        </div>

      </section>
    </>
  );
}

export default Checkout;