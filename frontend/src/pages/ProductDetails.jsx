import Navbar from "../components/Navbar";
import headphones from "../assets/headphones.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/api";

function ProductDetails() {
  const { id } = useParams();

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
  return (
    <>
      <Navbar />

      <section className="product-details">

        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">

          <h1>{product.name}</h1>

          <p className="price">₹{product.price}</p>

          <p className="rating">⭐⭐⭐⭐⭐ (4.8)</p>

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

          <p><strong>Stock:</strong>
           <span className="in-stock">
           {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span></p>

          <p><strong>Delivery:</strong> Free Delivery in 2–3 Days</p>

          <p><strong>Return Policy:</strong> 7 Days Easy Return</p>

        </div>

          <button className="add-cart-btn">
            Add to Cart
          </button>

          <button className="buy-now-btn">
            Buy Now
          </button>

        </div>

      </section>
    </>
  );
}

export default ProductDetails;