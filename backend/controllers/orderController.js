const Order = require("../models/Order");

// Create Order
const createOrder = async (req, res) => {
  try {
    const { user, products, totalPrice } = req.body;

    const order = await Order.create({
      user,
      products,
      totalPrice,
    });

    res.status(201).json({
      success: true,
      message: "Order Placed Successfully",
      order,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get User Orders
const getOrders = async (req, res) => {
  try {

    const { user } = req.params;

    const orders = await Order.find({ user })
      .populate("products.product");

    res.status(200).json({
      success: true,
      orders,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createOrder,
  getOrders,
};