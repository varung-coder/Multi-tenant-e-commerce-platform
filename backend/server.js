const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const healthRoutes = require("./routes/healthRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
const app = express();
app.use(express.json());
connectDB();

app.use("/api/health", healthRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
