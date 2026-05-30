const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const Dataset = require("../models/Dataset");

const uploadFile = async (req, res) => {

  try {

    if (!req.file) {

      return res.status(400).json({
        message: "No file uploaded"
      });

    }

    const formData = new FormData();

    formData.append(
      "file",
      fs.createReadStream(req.file.path)
    );

    const analyticsResponse = await axios.post(
      "http://127.0.0.1:8000/analyze",
      formData,
      {
        headers: formData.getHeaders()
      }
    );

    await Dataset.create({

      userId: req.userId,

      fileName: req.file.originalname,

      analytics: analyticsResponse.data

    });

    console.log(
      "Dataset Saved For User:",
      req.userId
    );

    res.status(200).json({

      message:
        "File uploaded and analyzed successfully",

      analytics:
        analyticsResponse.data

    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Analytics processing failed"
    });

  }

};

module.exports = {
  uploadFile
};
