const express = require("express");

const Dataset = require("../models/Dataset");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get(
  "/history",
  authMiddleware,
  async (req, res) => {

    try {

      const datasets =
        await Dataset.find({
          userId: req.userId
        }).sort({
          createdAt: -1
        });

      res.json(datasets);

    } catch (error) {

      console.error(error);

      res.status(500).json({
        error: "Failed to fetch datasets"
      });

    }

  }
);

module.exports = router;
