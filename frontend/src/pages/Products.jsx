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
         image={product.image}
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