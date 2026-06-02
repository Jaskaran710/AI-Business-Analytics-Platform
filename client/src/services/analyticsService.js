import axios from "axios";

const API_URL = "https://ai-business-analytics-api.onrender.com/api/upload";

export const uploadDataset = async (file) => {

  const formData = new FormData();

  formData.append("file", file);

  const response = await axios.post(
    API_URL,
    formData
  );

  return response.data;
};
