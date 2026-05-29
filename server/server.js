const express = require("express");
const cors = require("cors");
const PDFDocument = require("pdfkit");

require("dotenv").config();

console.log("Gemini Key Loaded:", !!process.env.GEMINI_API_KEY);

const uploadRoutes = require("./routes/uploadRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/upload", uploadRoutes);
app.use("/api/ai", aiRoutes);

app.get("/api/report", (req, res) => {

  const doc = new PDFDocument();

  res.setHeader(
    "Content-Type",
    "application/pdf"
  );

  res.setHeader(
    "Content-Disposition",
    "attachment; filename=analytics-report.pdf"
  );

  doc.pipe(res);

  doc.fontSize(24)
     .text("AI Business Analytics Report");

  doc.moveDown();

  doc.fontSize(14)
     .text("Generated Successfully");

  doc.moveDown();

  doc.text(
    `Generated: ${new Date().toLocaleString()}`
  );

  doc.end();

});

app.get("/", (req, res) => {
  res.send("Backend Server Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


