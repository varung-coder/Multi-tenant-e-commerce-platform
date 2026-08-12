import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../api/api";
import "./AddProduct.css";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await API.get(`/products/${id}`);

      const product = res.data.product;

      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setImage(product.image);
      setCategory(product.category);
      setStock(product.stock);

    } catch (error) {
      setError("Failed to load product");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.put(`/products/update/${id}`, {
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
        error.response?.data?.message || "Failed to update product"
      );
    }
  };

  return (
    <>
      <Navbar />

      <section className="add-product-page">

        <div className="add-product-box">

          <h1>Edit Product</h1>

          <p>Update product information.</p>

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
              Update Product
            </button>

          </form>

        </div>

      </section>
    </>
  );
}

export default EditProduct;