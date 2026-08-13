import { useEffect, useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import "./Products.css";
import { Link } from "react-router-dom";

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


function Products() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
  fetchProducts();
}, []);

const fetchProducts = async () => {
  try {
    const res = await API.get("/products");
    console.log(res.data);
    console.log("First Product:", res.data.products[0]);
    setProducts(res.data.products);
  } catch (error) {
    console.log(error);
  }
};

  return (
    <>
      <Navbar />

      <section className="products-page">

       <h1>All Products</h1>

       <p>
        Browse all available products from different sellers.
       </p>
       <div className="search-container">
       <input

         type="text"
         placeholder="🔍 Search products..."
         value={search}
         onChange={(e) => setSearch(e.target.value)}
       />
       </div>

       <div className="filter-container">
        <select>
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Home</option>
        </select>
       </div>

      <div className="product-container">

      {products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      ).length > 0 ? (

       products
        .filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        )
       .map((product, index) => (
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
     ))

  ) : (

  <h2 className="no-products">
    No Products Found 😔
  </h2>

)}

     </div>

    </section>
    </>
  );
}

export default Products;