const express = require("express");
const router = express.Router();
require("dotenv").config();
console.log(process.env);

const axios = require("axios");

// News API variables
const newsBaseUrl = "https://newsdata.io/api/1/news?";
const apiKey = process.env.NEWS_API;
const apiQuery = "&q=crypto&language=en";

const getNews = async () => {
  try {
    return await axios
      .get(`${newsBaseUrl}${apiKey}${apiQuery}`)
      .then((response) => {
        return response.data;
      });
  } catch (error) {
    console.error(error);
  }
};

// API request to news API
router.get("/", async (req, res) => {
  const resData = await getNews();
  await res.send(resData);
});

module.exports = router;
