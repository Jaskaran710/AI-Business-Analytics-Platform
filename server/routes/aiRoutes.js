const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const Chat = require("../models/Chat");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

router.post(
  "/",
  authMiddleware,
  async (req, res) => {

    try {

      const {
        question,
        analytics
      } = req.body;

      const model =
        genAI.getGenerativeModel({
          model: "gemini-2.5-flash"
        });

      const prompt = `
You are a senior business analyst, data consultant, and business intelligence expert.

Dataset Analytics:

${JSON.stringify(analytics, null, 2)}

User Question:

${question}

Your job is to deeply analyze the business data and answer like a real business consultant.

Provide the response in the following format:

📌 Direct Answer

Give a direct answer to the user's question.

🔍 Root Cause Analysis

Explain WHY this happened.
Identify possible causes using the provided analytics.
Discuss trends, patterns, declines, growth areas, weak performers, and unusual observations.

📊 Key Findings

List the most important findings from the data.

💼 Business Impact

Explain how this issue affects business performance, revenue, customers, efficiency, or growth.

✅ Recommended Actions

Provide 3-5 practical actions the business should take.

Rules:

- Use only information available in the analytics.
- Never invent numbers.
- Be specific and evidence-based.
- Think like a senior business consultant.
- Focus on business insights, not technical explanations.
- If the question asks why something happened, prioritize root cause analysis.
- If the data is insufficient, clearly mention that additional data is required.

Return a professional business report.
`;

      const result =
        await model.generateContent(prompt);

      const answer =
        result.response.text();

      await Chat.create({

        userId: req.userId,

        question,

        answer

      });

      console.log(
        "Chat Saved For User:",
        req.userId
      );

      res.json({
        answer
      });

    } catch (error) {

      console.error(error);

      res.status(500).json({
        error: "AI analysis failed"
      });

    }

  }
);

router.get(
  "/history",
  authMiddleware,
  async (req, res) => {

    try {

      const chats =
        await Chat.find({
          userId: req.userId
        }).sort({
          createdAt: -1
        });

      res.json(chats);

    } catch (error) {

      console.error(error);

      res.status(500).json({
        error: "Failed to fetch chats"
      });

    }

  }
);

module.exports = router;