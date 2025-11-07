require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

//Routes modules
const news = require("./src/server/routes/news.js");
const coins = require("./src/server/routes/coins.js");
const trending = require("./src/server/routes/trending.js");
const favs = require("./src/server/routes/fav.js");

app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use("/news", news);

app.use("/coins", coins);

app.use("/trending", trending);

app.use("/fav", favs);
