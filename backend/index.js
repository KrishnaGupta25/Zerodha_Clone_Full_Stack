require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { PositionModel } = require("./models/PositionModel");
const { HoldingModel } = require("./models/HoldingModel");
const { OrderModel } = require("./models/OrderModel");

const PORT = process.env.PORT || 3002;
const dbUrl = process.env.MONGO_URL || "mongodb://localhost:27017/myLocalDB";

const app = express();

// ✅ Define allowed frontend origins
const allowedOrigins = [
  "https://frontend-sigma-five-47.vercel.app",
  "https://zerodha-clone-liard-psi.vercel.app",
  "https://frontend-f4bkx7xom-lalit-routs-projects.vercel.app",
  "https://dashboard-plum-iota.vercel.app",
  "https://dashboard-8jy230lg2-lalit-routs-projects.vercel.app",
];

// ✅ CORS Configuration
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // ✅ Allow cookies in cross-origin requests
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
    "Origin",
  ],
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

// ✅ Apply CORS Middleware
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // ✅ Handle preflight requests

// ✅ Middleware
app.use(cookieParser());
app.use(express.json());

// ✅ Global CORS Headers for API Responses
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With"
  );
  res.header("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});

// ✅ MongoDB Connection
async function main() {
  try {
    await mongoose.connect(dbUrl);
    console.log("✅ Connected to MongoDB successfully");
  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err);
  }
}
main();

// ✅ User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
const User = mongoose.model("User", userSchema);

// ✅ JWT Token Generation
const createSecretToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET || "yourSecretKey", {
    expiresIn: "1h",
  });
};

// ✅ Signup Route
app.post("/signup", async (req, res) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, username });

    await user.save();

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    res.status(201).json({ message: "Signup successful", success: true, user });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// ✅ Login Route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });

    res.status(200).json({ message: "User logged in successfully", user });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// ✅ Get all positions
app.get("/allPositions", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    let allPositions = await PositionModel.find({});
    res.json(allPositions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching positions" });
  }
});

// ✅ Get all holdings
app.get("/allHoldings", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    let allHoldings = await HoldingModel.find({});
    res.json(allHoldings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching holdings" });
  }
});

// ✅ Get all orders
app.get("/allOrders", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    let allOrders = await OrderModel.find({});
    res.json(allOrders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching orders" });
  }
});

// ✅ Add a new order
app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    if (!name || !qty || !price || !mode) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let newOrder = new OrderModel({ name, qty, price, mode });
    await newOrder.save();

    res.status(201).json({ message: "Order saved successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving order" });
  }
});


// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
