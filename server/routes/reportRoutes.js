const express = require("express");
const PDFDocument = require("pdfkit");

const Dataset = require("../models/Dataset");
const authMiddleware =
  require("../middleware/authMiddleware");

const router = express.Router();

router.get(
  "/:id",
  authMiddleware,
  async (req, res) => {

    try {

      const dataset =
        await Dataset.findOne({
          _id: req.params.id,
          userId: req.userId
        });

      if (!dataset) {

        return res.status(404).json({
          error: "Dataset not found"
        });

      }

      const doc = new PDFDocument();

      res.setHeader(
        "Content-Type",
        "application/pdf"
      );

      res.setHeader(
        "Content-Disposition",
        `attachment; filename=${dataset.fileName}.pdf`
      );

      doc.pipe(res);

      doc.fontSize(24)
         .text("AI Business Analytics Report");

      doc.moveDown();

      doc.fontSize(16)
         .text(`Dataset: ${dataset.fileName}`);

      doc.text(
        `Generated: ${new Date().toLocaleString()}`
      );

      doc.moveDown();

      doc.fontSize(14)
         .text("Analytics Summary");

      doc.moveDown();

      Object.entries(
        dataset.analytics
      ).forEach(([key, value]) => {

        doc.text(
          `${key}: ${JSON.stringify(value)}`
        );

      });

      doc.end();

    } catch (error) {

      console.error(error);

      res.status(500).json({
        error: "Report generation failed"
      });

    }

  }
);

module.exports = router;
