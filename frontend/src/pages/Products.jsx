import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

import headphones from "../assets/headphones.jpg";
import smartwatch from "../assets/smartwatch.jpg";
import shoes from "../assets/shoes.jpg";
import chair from "../assets/chair.jpg";

const products = [
  {
    image: headphones,
    title: "Wireless Headphones",
    price: "₹2,499",
  },
  {
    image: smartwatch,
    title: "Smart Watch",
    price: "₹3,999",
  },
  {
    image: shoes,
    title: "Running Shoes",
    price: "₹2,199",
  },
  {
    image: chair,
    title: "Office Chair",
    price: "₹5,499",
  },
];

function Products() {
  const [search, setSearch] = useState("");
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
        product.title.toLowerCase().includes(search.toLowerCase())
      ).length > 0 ? (

       products
        .filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        )
       .map((product, index) => (
       <ProductCard
         key={index}
         image={product.image}
         title={product.title}
         price={product.price}
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