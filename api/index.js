const express = require("express");
const app = express();
const cors = require("cors");

const path = __dirname + "/../client/build";

//Routes modules
const news = require("./routes/news.js");
const coins = require("./routes/coins.js");
const trending = require("./routes/trending.js");
const favs = require("./routes/fav.js");

app.use(express.static(path));
app.use(cors());

app.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});

app.use("/news", news);

app.use("/coins", coins);

app.use("/trending", trending);

app.use("/fav", favs);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
