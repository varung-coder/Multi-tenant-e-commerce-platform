const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProducts,
  getCategories,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.post("/add", addProduct);
router.get("/", getProducts);
router.get("/categories", getCategories);
router.get("/:id", getProductById);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;