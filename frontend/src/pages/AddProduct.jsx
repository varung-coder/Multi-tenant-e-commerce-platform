import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../api/api";
import "./AddProduct.css";

function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description || !price || !image || !category || !stock) {
      setError("Please fill all fields.");
      return;
    }

    try {
      const res = await API.post("/products/add", {
        name,
        description,
        price: Number(price),
        image,
        category,
        stock: Number(stock),
      });

      alert(res.data.message);

      navigate("/products");

    } catch (error) {
      setError(
        error.response?.data?.message || "Failed to add product"
      );
    }
  };

  return (
    <>
      <Navbar />

      <section className="add-product-page">

        <div className="add-product-box">

          <h1>Add Product</h1>

          <p>Add a new product to ShopEase.</p>

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <textarea
              placeholder="Product Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <input
              type="text"
              placeholder="Image filename"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Mobiles">Mobiles</option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
              <option value="Home">Home</option>
            </select>

            <input
              type="number"
              placeholder="Stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />

            <button type="submit">
              Add Product
            </button>

          </form>

        </div>

      </section>
    </>
  );
}

export default AddProduct;