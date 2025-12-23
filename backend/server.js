const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { OpenAI } = require("openai");
const cors = require("cors");

// Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const forgotPasswordRoutes = require("./routes/forgotPassword");

dotenv.config();
const app = express();

// ✅ Middleware
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());

// ✅ MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/forgot-password", forgotPasswordRoutes);

// ✅ AI Route
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/ai", async (req, res) => {
  try {
    const { messages } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
    });

    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error("❌ AI Error:", error);
    res.status(500).json({ error: "AI request failed" });
  }
});

// ✅ Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
