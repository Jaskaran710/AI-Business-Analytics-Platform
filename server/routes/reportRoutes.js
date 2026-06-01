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

      const analytics =
        dataset.analytics || {};

      const doc =
        new PDFDocument({
          margin: 50
        });

      res.setHeader(
        "Content-Type",
        "application/pdf"
      );

      res.setHeader(
        "Content-Disposition",
        `attachment; filename=${dataset.fileName}.pdf`
      );

      doc.pipe(res);

      /*
      ==================================
      COVER PAGE
      ==================================
      */

      doc
        .fontSize(28)
        .fillColor("#2563eb")
        .text(
          "AI BUSINESS ANALYTICS PLATFORM",
          {
            align: "center"
          }
        );

      doc.moveDown(2);

      doc
        .fontSize(22)
        .fillColor("black")
        .text(
          "Executive Analytics Report",
          {
            align: "center"
          }
        );

      doc.moveDown(3);

      doc
        .fontSize(16)
        .text(
          `Dataset: ${dataset.fileName}`,
          {
            align: "center"
          }
        );

      doc.moveDown();

      doc.text(
        `Generated: ${new Date().toLocaleString()}`,
        {
          align: "center"
        }
      );

      doc.addPage();

      /*
      ==================================
      EXECUTIVE SUMMARY
      ==================================
      */

      doc
        .fontSize(22)
        .fillColor("#2563eb")
        .text("Executive Summary");

      doc.moveDown();

      doc
        .fontSize(12)
        .fillColor("black")
        .text(
          `This report analyzes the uploaded dataset and provides business intelligence insights, KPI summaries and AI-generated recommendations.`
        );

      doc.moveDown(2);

      /*
      ==================================
      KPI SECTION
      ==================================
      */

      doc
        .fontSize(20)
        .fillColor("#2563eb")
        .text("Dataset KPIs");

      doc.moveDown();

      doc.fontSize(13);

      doc.text(
        `Rows: ${analytics.rows ?? "N/A"}`
      );

      doc.text(
        `Columns: ${analytics.columns ?? "N/A"}`
      );

      doc.text(
        `Missing Values: ${analytics.missing_values ?? "N/A"}`
      );

      doc.text(
        `Total Sales: ${analytics.total_sales ?? "N/A"}`
      );

      doc.text(
        `Average Sales: ${analytics.average_sales ?? "N/A"}`
      );

      doc.moveDown(2);

      /*
      ==================================
      AI INSIGHTS
      ==================================
      */

      doc
        .fontSize(20)
        .fillColor("#2563eb")
        .text("AI Insights");

      doc.moveDown();

      if (
        analytics.average_wait_time &&
        analytics.average_wait_time > 30
      ) {

        doc.text(
          "• Average wait time is above recommended threshold."
        );

      }

      if (
        analytics.average_satisfaction &&
        analytics.average_satisfaction < 5
      ) {

        doc.text(
          "• Patient satisfaction score is below target."
        );

      }

      if (
        analytics.rows &&
        analytics.rows > 1000
      ) {

        doc.text(
          "• Dataset size is sufficient for advanced analytics."
        );

      }

      if (
        analytics.missing_values === 0
      ) {

        doc.text(
          "• Dataset quality is excellent with no missing values."
        );

      }

      doc.moveDown(2);

      /*
      ==================================
      RECOMMENDATIONS
      ==================================
      */

      doc
        .fontSize(20)
        .fillColor("#2563eb")
        .text("Strategic Recommendations");

      doc.moveDown();

      doc
        .fontSize(12)
        .fillColor("black");

      doc.text(
        "1. Continue monitoring business KPIs regularly."
      );

      doc.text(
        "2. Reduce operational bottlenecks identified in the analysis."
      );

      doc.text(
        "3. Improve customer or patient satisfaction metrics."
      );

      doc.text(
        "4. Use AI Insights page for deeper investigation."
      );

      doc.moveDown(2);

      /*
      ==================================
      RAW ANALYTICS
      ==================================
      */

      doc
        .fontSize(20)
        .fillColor("#2563eb")
        .text("Analytics Snapshot");

      doc.moveDown();

      Object.entries(
        analytics
      ).forEach(([key, value]) => {

        doc
          .fontSize(11)
          .fillColor("black")
          .text(
            `${key}: ${JSON.stringify(value)}`
          );

      });

      doc.end();

    } catch (error) {

      console.error(error);

      res.status(500).json({
        error:
          "Report generation failed"
      });

    }

  }
);

module.exports = router;