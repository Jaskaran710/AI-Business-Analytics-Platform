const express = require("express");
const PDFDocument = require("pdfkit");
const {
  GoogleGenerativeAI
} = require("@google/generative-ai");
const Dataset = require("../models/Dataset");
const authMiddleware =
  require("../middleware/authMiddleware");

const router = express.Router();
const genAI =
  new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
  );

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
let executiveSummary = `
This report analyzes the uploaded dataset and provides key business intelligence insights.

The dataset contains ${
  analytics.rows || "N/A"
} records and ${
  analytics.columns || "N/A"
} attributes with ${
  analytics.missing_values || 0
} missing values.

The data quality appears ${
  analytics.missing_values === 0
    ? "excellent"
    : "acceptable"
} and is suitable for analytics and reporting.

Key performance indicators and operational trends have been summarized in the sections below to support strategic decision-making.
`;
try {

  const model =
    genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

  const prompt = `
You are a senior business intelligence consultant.

Analyze this dataset summary:

${JSON.stringify(
  analytics,
  null,
  2
)}

Write an executive summary for a business report.

Requirements:

- 120-180 words
- Professional tone
- Mention important trends
- Mention data quality
- Mention operational insights
- Mention risks
- Mention opportunities

Do not use markdown.
Do not use bullet points.
`;

  const result =
    await model.generateContent(
      prompt
    );

  executiveSummary =
    result.response.text();

} catch (err) {

 console.error(
  "Gemini Summary Error:",
  err
);

}

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

doc
  .fontSize(14)
  .fillColor("#374151")
  .text(
    "Prepared By",
    {
      align: "center"
    }
  );

doc
  .fontSize(18)
  .fillColor("#111827")
  .text(
    "Jaskaran Arora",
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
    executiveSummary,
    {
      align: "justify"
    }
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
DATA QUALITY
==================================
*/

doc
  .fontSize(20)
  .fillColor("#2563eb")
  .text("Data Quality Assessment");

doc.moveDown();

const qualityScore =
  analytics.missing_values === 0
    ? 100
    : Math.max(
        0,
        100 -
        (
          analytics.missing_values || 0
        )
      );

doc
  .fontSize(13)
  .fillColor("black")
  .text(
    `Data Quality Score: ${qualityScore}%`
  );

doc.text(
  qualityScore >= 95
    ? "Excellent dataset quality with minimal data issues."
    : "Dataset contains missing values requiring attention."
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
DEPARTMENT ANALYSIS
==================================
*/

if (
  analytics.department_counts
) {

  doc
    .fontSize(20)
    .fillColor("#2563eb")
    .text("Department Analysis");

  doc.moveDown();

  const departments =
    Object.entries(
      analytics.department_counts
    ).sort(
      (a, b) =>
        b[1] - a[1]
    );

  const topDepartment =
    departments[0];

  if (topDepartment) {

    doc
      .fontSize(13)
      .fillColor("black")
      .text(
        `Top Department: ${topDepartment[0]}`
      );

    doc.text(
      `Volume: ${topDepartment[1]} Patients`
    );

  }

  doc.moveDown(2);

}

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

            doc.moveDown(4);

doc
  .fontSize(26)
  .fillColor("#2563eb")
  .text(
    "Thank You",
          {
            align: "center"
          }
        );

      doc.moveDown(2);

      doc
        .fontSize(16)
        .fillColor("black")
        .text(
          "AI Business Analytics Platform",
          {
            align: "center"
          }
        );

      doc.moveDown();

      doc
        .fontSize(14)
        .text(
          "Designed & Developed By",
          {
            align: "center"
          }
        );

      doc
        .fontSize(20)
        .fillColor("#111827")
        .text(
          "Jaskaran Arora",
          {
            align: "center"
          }
        );

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