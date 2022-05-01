const express = require("express");
const router = express.Router();

const axios = require("axios");

const urlTwo = "https://api.coingecko.com/api/v3/search/trending";

const getTrending = async () => {
  try {
    return await axios.get(urlTwo).then((response) => {
      return response.data;
    });
  } catch (error) {
    console.error(error);
  }
};

router.get("/", async (req, res) => {
  const resData = await getTrending();
  await res.send(resData);
});

module.exports = router;
