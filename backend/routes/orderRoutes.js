const express = require("express");

const router = express.Router();

const {
  createOrder,
  getOrders,
} = require("../controllers/orderController");

// Create Order
router.post("/create", createOrder);

// Get User Orders
router.get("/:user", getOrders);

module.exports = router;