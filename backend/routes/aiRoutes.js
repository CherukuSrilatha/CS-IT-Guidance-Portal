import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/ai", async (req, res) => {
  try {
    const { messages } = req.body;

    // Construct the AI prompt
    const prompt = messages.map(m => `${m.role}: ${m.content}`).join("\n");

    // You can replace this with any AI API (OpenAI, Gemini, etc.)
    // Example using OpenAI (make sure to install openai package and set API key)
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a CS/IT expert assistant." },
          ...messages,
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    res.json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    console.error("AI Route Error:", error.message);
    res.status(500).json({ reply: "Server error while processing your request." });
  }
});

export default router;
