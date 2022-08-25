import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [coins, setCoins] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [darkMood, setDarkMood] = useState(true);
  const [showSwitch, setShowSwitch] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [searchCoins, setSearchCoins] = useState("");
  const [star, setStar] = useState(false);
  const [trending, setTrending] = useState([]);
  const [openNav, setOpenNav] = useState(false);
  const [Exchanges, setExchanges] = useState([]);
  const [searchExchange, setSearchExchange] = useState("");

  const starCoin = () => {
    setStar(!star);
  };

  const readFullText = () => {
    setReadMore(!readMore);
  };

  const switchBtn = () => {
    setShowSwitch(!showSwitch);
  };

  const changeBackground = () => {
    setDarkMood(!darkMood);
  };

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("https://api.coinlore.net/api/global/");
    const info = await response.json();
    setLoading(false);
    setData(info);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchCoins = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false"
    );
    const response2 = await response.json();
    const info = response2;
    setCoins(info);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const fetchTrending = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    const response2 = await response.json();
    const info = response2.coins;
    setTrending(info);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  const filterCoins = coins.filter((item) => {
    return item.name.toLowerCase().includes(searchCoins.toLowerCase());
  });

  const exchangesDate = async () => {
    const response = await fetch("https://api.coingecko.com/api/v3/exchanges");

    const info = await response.json();
    setExchanges(info);
  };

  useEffect(() => {
    exchangesDate();
  }, []);

  const filterExchanges = Exchanges.filter((item) => {
    return item.name.toLowerCase().includes(searchExchange.toLowerCase());
  });

  const openSubNav = () => {
    setOpenNav(true);
  };

  const closeNav = () => {
    if (openNav === true) {
      setOpenNav(false);
    }
  };

  const decimals = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  if (Loading) {
    return (
      <h1 className="d-flex align-items-center justify-content-center">
        ...Loading
      </h1>
    );
  }

  return (
    <AppContext.Provider
      value={{
        data,
        coins,
        darkMood,
        changeBackground,
        showSwitch,
        switchBtn,
        readMore,
        readFullText,
        setSearchCoins,
        filterCoins,
        starCoin,
        star,
        decimals,
        trending,
        openNav,
        openSubNav,
        closeNav,
        filterExchanges,
        setSearchExchange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
