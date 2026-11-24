const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const strictPromptTemplate = require("./StrictPrompt");

// Load environment variables if .env exists
try {
  require("dotenv").config();
} catch (e) {}

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

console.log("✅ Starting backend setup...");

const apiKey = process.env.GEMINI_API_KEY || "AIzaSyCZGt7GAz-zAS1tPpj98px96JZsvSsGJ4k";
const genAI = new GoogleGenerativeAI(apiKey);

app.post("/api/message", async (req, res) => {
  const userMessage = req.body.message;
  console.log("👉 Received message from frontend:", userMessage);

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    console.log("✅ Gemini model initialized");

    const strictPrompt = `${strictPromptTemplate}\n\nQuestion: ${userMessage}\nAnswer:`;

    const result = await model.generateContent(strictPrompt);
    const text = result.response.text();

    console.log("✅ Gemini response:", text);
    res.json({ reply: text });
  } catch (error) {
    console.error("🔥 Error calling Gemini API:", error);
    res.status(500).json({ reply: "Sorry, I had an issue processing your request." });
  }
});

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
