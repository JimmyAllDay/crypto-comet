import express from "express";
import cors from "cors";
import path from "path";
import axios from "axios";

const app = express();
app.use(cors());

// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    // eslint-disable-next-line no-undef
    req.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

// Log if server is running
app.listen(port, () => console.log(`Listening on port ${port}`));

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
