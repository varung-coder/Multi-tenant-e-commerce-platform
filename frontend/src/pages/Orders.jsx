import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../api/api";
import "./Orders.css";

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

function Orders() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      fetchOrders();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await API.get(`/orders/${user.id}`);
      setOrders(res.data.orders);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getProductImage = (productName, productImage) => {
    if (productName === "Samsung Galaxy S24") return samsungS24;
    if (productName === "Wireless Headphones") return headphones;
    if (productName === "Smart Watch") return smartwatch;
    if (productName === "Bluetooth Speaker") return speaker;
    if (productName === "Running Shoes") return shoes;
    if (productName === "Premium Hoodie") return hoodie;
    if (productName === "Gaming Mouse") return gamingMouse;
    if (productName === "Mechanical Keyboard") return mechanicalKeyboard;
    if (productName === "Laptop Backpack") return laptopBackpack;
    if (productName === "Sunglasses") return sunglasses;
    if (productName === "Men's Casual Shirt") return mensCasualShirt;
    if (productName === "Coffee Maker") return coffeeMaker;

    return productImage;
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <section className="orders-page">
          <h1>My Orders</h1>
          <p>Loading orders...</p>
        </section>
      </>
    );
  }

  if (!user) {
    return (
      <>
        <Navbar />

        <section className="orders-page">
          <h1>My Orders</h1>

          <div className="empty-orders">
            <h2>🔐 Please Login</h2>
            <p>Please login to view your orders.</p>

            <button onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
        </section>
      </>
    );
  }

  if (orders.length === 0) {
    return (
      <>
        <Navbar />

        <section className="orders-page">
          <h1>My Orders</h1>

          <div className="empty-orders">
            <h2>📦 No Orders Yet</h2>

            <p>
              You haven't placed any orders yet.
            </p>

            <button onClick={() => navigate("/products")}>
              Start Shopping
            </button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="orders-page">

        <h1>My Orders</h1>

        <div className="orders-container">

          {orders.map((order) => (

            <div className="order-card" key={order._id}>

              <div className="order-header">

                <div>
                  <h3>
                    Order #{order._id.slice(-6)}
                  </h3>

                  <p>
                    Date:{" "}
                    {new Date(
                      order.createdAt
                    ).toLocaleDateString()}
                  </p>
                </div>

                <span className="order-status">
                  {order.status}
                </span>

              </div>

              <div className="order-products">

                {order.products.map((item) => {

                  const image = getProductImage(
                    item.product?.name,
                    item.product?.image
                  );

                  return (
                    <div
                      className="order-product"
                      key={item._id}
                    >

                      <img
                        src={image}
                        alt={item.product?.name}
                        className="order-product-image"
                      />

                      <div className="order-product-info">

                        <h4>
                          {item.product?.name || "Product"}
                        </h4>

                        <p>
                          Quantity: {item.quantity}
                        </p>

                      </div>

                      <p>
                        ₹
                        {item.product
                          ? item.product.price *
                            item.quantity
                          : 0}
                      </p>

                    </div>
                  );
                })}

              </div>

              <div className="order-total">

                <strong>Total</strong>

                <strong>
                  ₹{order.totalPrice}
                </strong>

              </div>

            </div>

          ))}

        </div>

      </section>
    </>
  );
}

export default Orders;