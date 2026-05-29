const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const Chat = require("../models/Chat");

const router = express.Router();

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

router.post("/", async (req, res) => {

  try {

    const { question, analytics } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const prompt = `
You are a business analytics expert.

Dataset analytics:

${JSON.stringify(analytics, null, 2)}

User question:

${question}

Provide a concise business insight.
`;

    const result =
      await model.generateContent(prompt);

    const answer =
      result.response.text();

    await Chat.create({
      question,
      answer
    });

    console.log("Chat Saved");

    res.json({
      answer
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "AI analysis failed"
    });

  }

});

router.get("/history", async (req, res) => {

  try {

    const chats = await Chat.find()
      .sort({ createdAt: -1 });

    res.json(chats);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Failed to fetch chats"
    });

  }

});

module.exports = router;