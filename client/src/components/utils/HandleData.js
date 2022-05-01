import React, { useEffect, useState, cloneElement } from "react";

import { useLocation } from "react-router";

import axios from "axios";

export default function HandleData(props) {
  const path = useLocation().pathname;
  // Dashboard state
  const [dashLoading, setDashLoading] = useState(true);
  const [favs, setFavs] = useState(null);
  const [currentFav, setCurrentFav] = useState(null);
  const [trends, setTrends] = useState(null);
  const [news, setNews] = useState(null);

  // Search page state
  const [state, setState] = useState([]);
  const [data, setData] = useState([]);

  //Error handling
  const [error, setError] = useState(null);

  // Initiate API calls
  useEffect(() => {
    getData();
  }, []);

  // Reset state on navigation away from search page
  useEffect(() => {
    path !== "/search" && setData(state);
  }, [path]);

  //Get initial data via Node
  const getData = () => {
    setDashLoading(true);

    // Urls
    const coinsUrl = "http://localhost:5000/coins";
    const trendingUrl = "http://localhost:5000/trending";
    const newsURL = "http://localhost:5000/news";

    // Get requests
    const coins = axios.get(coinsUrl);
    const trending = axios.get(trendingUrl);
    const news = axios.get(newsURL);

    // axios call
    axios
      .all([coins, trending, news])
      .then(
        axios.spread((...responses) => {
          const coinsRes = responses[0];
          const trendingRes = responses[1];
          const newsRes = responses[2];

          setFavs([
            {
              name: coinsRes.data.coins[0].name,
              image: coinsRes.data.coins[0].image,
              data: coinsRes.data.fav,
            },
          ]);
          setCurrentFav({
            name: coinsRes.data.coins[0].name,
            image: coinsRes.data.coins[0].image,
            data: coinsRes.data.fav,
          });
          setTrends(trendingRes.data.coins);

          setNews(newsRes.data.results);

          setState(coinsRes.data.coins);
          setData(coinsRes.data.coins);

          // End loading state
          setDashLoading(false);
        })
      )
      .catch((errors) => {
        console.log(errors);
        setError(error);
      });
  };

  // Get data for favourited currency
  const addFav = (searchData) => {
    // Get coin id
    const coin = searchData.id;

    //Check favs array for presence of selected fav
    const requestFav = (favs, coin) =>
      favs.find((fav) => fav.name.toLowerCase() === coin) ? false : true;

    //If fav is not in array, request fav data
    if (requestFav(favs, coin)) {
      const requestUrl = `http://localhost:5000/fav?id=${coin}`;
      axios({ url: requestUrl })
        .then((response) => {
          if (favs.length === 0) {
            setCurrentFav({
              name: searchData.name,
              image: searchData.image,
              data: response.data,
            });
          }
          setFavs([
            ...favs,
            {
              name: searchData.name,
              image: searchData.image,
              data: response.data,
            },
          ]);
        })
        .catch((error) => {
          console.log(error);
          setError(error);
        });
    }
  };

  // Switch currency displayed in chart
  const favsHandler = (index) => {
    setCurrentFav(favs[index]);
  };

  // Remove favourited currency
  const removeFav = (index) => {
    if (favs[index] === currentFav) {
      if (index === 0) {
        setCurrentFav(favs[index + 1]);
      }
      if (index !== 0) {
        setCurrentFav(favs[index - 1]);
      }
      setFavs(
        favs.filter((fav) => {
          return fav !== favs[index];
        })
      );
    } else {
      setFavs(
        favs.filter((fav) => {
          return fav !== favs[index];
        })
      );
    }
  };

  const routes = cloneElement(props.routes, {
    dashLoading: dashLoading,
    favs: favs,
    trends: trends,
    news: news,
    currentFav: currentFav,
    favsHandler: favsHandler,
    removeFav: removeFav,
    state: state,
    data: data,
    setData: setData,
    addFav: addFav,
    error: error,
  });

  return <>{routes}</>;
}
