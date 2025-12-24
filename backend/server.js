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
    console.error("❌ AI Error:", error.message);
    res.status(500).json({ error: "AI request failed" });
  }
});

// ✅ START SERVER FIRST (IMPORTANT FOR RENDER)
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// ✅ CONNECT TO MONGODB (NON-BLOCKING)
mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 10000,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) =>
    console.error("❌ MongoDB connection error:", err.message)
  );
