const express = require("express");
const cors = require("cors");

require("dotenv").config();

console.log(
  "Gemini Key Loaded:",
  !!process.env.GEMINI_API_KEY
);

const uploadRoutes =
  require("./routes/uploadRoutes");

const aiRoutes =
  require("./routes/aiRoutes");

const authRoutes =
  require("./routes/authRoutes");

const datasetRoutes =
  require("./routes/datasetRoutes");

const reportRoutes =
  require("./routes/reportRoutes");

const connectDB =
  require("./config/db");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/api/upload",
  uploadRoutes
);

app.use(
  "/api/ai",
  aiRoutes
);

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/datasets",
  datasetRoutes
);

app.use(
  "/api/report",
  reportRoutes
);

app.get(
  "/",
  (req, res) => {

    res.send(
      "Backend Server Running"
    );

  }
);

const PORT =
  process.env.PORT || 5000;

app.listen(
  PORT,
  () => {

    console.log(
      `Server running on port ${PORT}`
    );

  }
);