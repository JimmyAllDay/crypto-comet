const express = require("express");
const router = express.Router();

const axios = require("axios");

// URL variables
const today = new Date();
const yearAgoSecs = Math.round(
  today.setFullYear(today.getFullYear() - 1) / 1000
);
const todaySecs = Math.round(Date.now() / 1000);
const favUrlBase = "https://api.coingecko.com/api/v3/coins/";

const getFav = async (url) => {
  try {
    return await axios.get(url).then((response) => {
      return response.data;
    });
  } catch (error) {
    console.error(error);
  }
};

// API request to news API
router.get("/", async (req, res) => {
  const coin = req.query.id;
  const favUrl = `${favUrlBase}${coin}/market_chart/range?vs_currency=usd&from=${yearAgoSecs}&to=${todaySecs}`;
  const resData = await getFav(favUrl);

  await res.send(resData);
});

module.exports = router;
