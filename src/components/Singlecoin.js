import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Chart from "../components/Chart";
import { useGlobalContext } from "./context";

const SingleCoin = ({ user }) => {
  const { decimals, darkMood, changeBackground } = useGlobalContext();
  const [coin, setCoin] = useState();
  const { id } = useParams();

  const historicData = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    const info = await response.json();
    setCoin(info);
  };

  useEffect(() => {
    historicData();
  }, []);

  if (!coin) {
    return (
      <h1 className="d-flex align-items-center justify-content-center">
        ...Loading
      </h1>
    );
  }

  return (
    <div
      className={darkMood ? "row bg-light text-dark" : "row bg-dark text-light"}
    >
      <div className="d-flex align-items-center p-1 bg-secondary">
        <h4 className="user">Welcome, {user?.name}</h4>
        <span className="ms-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-brightness-high-fill"
            viewBox="0 0 16 16"
            onClick={changeBackground}
            className="light-icon me-3"
          >
            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
          </svg>
          <input type="text" placeholder=" search" className="rounded hide" />
        </span>
      </div>
      <div className="col-lg-4 col-sm-12 border-end border-3 d-flex flex-column align-items-center p-4 me-0">
        <img
          style={{ width: "60%" }}
          src={coin?.image.large}
          alt={coin?.name}
        />
        <div className="m-4">
          <h2 className="fw-bold">{coin?.name}</h2>
          <h6>Coin Rank: {coin?.coingecko_rank}</h6>
          <p>{coin?.description.en.split(". ")[0]}</p>
          <h4>
            Current Price: ${decimals(coin?.market_data.current_price.usd)}
          </h4>
          <h4>Market Cap: ${decimals(coin?.market_data.market_cap.usd)}</h4>
        </div>
      </div>
      <div className="col-lg-8 col-sm-12">
        <Chart chart={coin} />
      </div>
    </div>
  );
};

export default SingleCoin;
