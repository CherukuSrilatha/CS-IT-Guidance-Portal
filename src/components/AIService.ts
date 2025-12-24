// src/components/AIService.ts
import axios from "axios";

export const getAIResponse = async (
  messages: { role: string; content: string }[]
) => {
  try {
    const response = await axios.post(
      "https://cs-it-guidance-portal-backend.onrender.com/api/ai",
      { messages }
    );
    return response.data.reply;
  } catch (error) {
    console.error("AIService Error:", error);
    return "Sorry, I couldn't process your request. Please try again.";
  }
};
