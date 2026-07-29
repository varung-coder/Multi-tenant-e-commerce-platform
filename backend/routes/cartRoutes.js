const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCart,
  removeFromCart,
} = require("../controllers/cartController");

// Add Product To Cart
router.post("/add", addToCart);

// Get User Cart
router.get("/:user", getCart);

// Remove Product From Cart
router.delete("/remove/:id", removeFromCart);

module.exports = router;