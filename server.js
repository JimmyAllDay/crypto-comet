<<<<<<< HEAD
import express from "express";
import cors from "cors";
// import path from "path";
import axios from "axios";

=======
const express = require("express");
>>>>>>> refactor
const app = express();
const cors = require("cors");

//Routes modules
const news = require("./src/server/routes/news.js");
const coins = require("./src/server/routes/coins.js");
const trending = require("./src/server/routes/trending.js");
const favs = require("./src/server/routes/fav.js");

app.use(cors());

const port = process.env.PORT || 5000;

<<<<<<< HEAD
// app.use(express.static(path.join(__dirname, "build")));

// app.get("/", (req, res) => {
//   // eslint-disable-next-line no-undef
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// // eslint-disable-next-line no-undef
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("build"));
//   app.get("*", (req, res) => {
//     // eslint-disable-next-line no-undef
//     req.sendFile(path.resolve(__dirname, "build", "index.html"));
//   });
// }

// News API variables
const newsBaseUrl = "https://newsdata.io/api/1/news?";
const apiKey = "apikey=pub_2580e55599ffc98709c952188774d7157514";
const apiQuery = "&q=crypto&language=en";

const getNews = async () => {
  try {
    return await axios
      .get(`${newsBaseUrl}${apiKey}${apiQuery}`)
      .then((response) => {
        console.log(response);
        return response.data;
      });
  } catch (error) {
    console.error(error);
  }
};

// API request to news API
app.get("/news_api", async (req, res) => {
  const resData = await getNews();
  await res.send(resData);
});

// Log if server is running
app.listen(port, () => console.log(`Listening on port ${port}`));
=======
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use("/news", news);

app.use("/coins", coins);

app.use("/trending", trending);

app.use("/fav", favs);
>>>>>>> refactor
