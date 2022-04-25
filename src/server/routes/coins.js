const express = require("express");
const router = express.Router();

const axios = require("axios");

const initUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=250&page=1&sp";

// URL variables
const today = new Date();
const yearAgoSecs = Math.round(
  today.setFullYear(today.getFullYear() - 1) / 1000
);
const todaySecs = Math.round(Date.now() / 1000);
const favUrlBase = "https://api.coingecko.com/api/v3/coins/";

const getCoins = async () => {
  try {
    return await axios.get(initUrl).then(async (response) => {
      const data = {};
      data.coins = response.data;
      const favUrl = `${favUrlBase}${response.data[0].id}/market_chart/range?vs_currency=usd&from=${yearAgoSecs}&to=${todaySecs}`;
      await axios
        .get(favUrl)
        .then((response) => {
          data.fav = response.data;
        })
        .catch((error) => console.error(error));
      return data;
    });
  } catch (error) {
    console.error(error);
  }
};

// API request to news API
router.get("/", async (req, res) => {
  const resData = await getCoins();
  await res.send(resData);
});

module.exports = router;
