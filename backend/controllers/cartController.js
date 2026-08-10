const Cart = require("../models/Cart");
const Product = require("../models/Product");

// Add Product to Cart
const addToCart = async (req, res) => {
  try {
    const { user, product, quantity } = req.body;

    // Check if product exists
    const productExists = await Product.findById(product);

    if (!productExists) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Check if product is already in cart
    const existingCart = await Cart.findOne({
      user,
      product,
    });

    if (existingCart) {
      existingCart.quantity += quantity || 1;

      await existingCart.save();

      return res.status(200).json({
        success: true,
        message: "Cart Updated Successfully",
        cart: existingCart,
      });
    }

    // Create new cart item
    const cart = await Cart.create({
      user,
      product,
      quantity: quantity || 1,
    });

    res.status(201).json({
      success: true,
      message: "Product Added To Cart",
      cart,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get User Cart
const getCart = async (req, res) => {
  try {
    const { user } = req.params;

    const cart = await Cart.find({ user }).populate("product");

    res.status(200).json({
      success: true,
      cart,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Remove Product From Cart
const removeFromCart = async (req, res) => {
  try {
    const cartItem = await Cart.findByIdAndDelete(req.params.id);

    if (!cartItem) {
      return res.status(404).json({
        success: false,
        message: "Cart Item Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product Removed From Cart",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateCartQuantity = async (req, res) => {
  try {
    const { quantity } = req.body;

    const cartItem = await Cart.findByIdAndUpdate(
      req.params.id,
      { quantity },
      { new: true }
    );

    if (!cartItem) {
      return res.status(404).json({
        success: false,
        message: "Cart Item Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Cart Quantity Updated",
      cart: cartItem,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart,
  updateCartQuantity,
};