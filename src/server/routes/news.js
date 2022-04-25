const express = require("express");
const router = express.Router();

const axios = require("axios");

// News API variables
const newsBaseUrl = "https://newsdata.io/api/1/news?";
const apiKey = "apikey=pub_2580e55599ffc98709c952188774d7157514";
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
