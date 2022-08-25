import React, { useState } from "react";
import { useGlobalContext } from "./context";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";

const Coin = () => {
  const [page, setPage] = useState(1);
  const { decimals, darkMood, setSearchCoins, filterCoins } =
    useGlobalContext();

  return (
    <section>
      <input
        type="text"
        className="my-3 border-5 border-success rounded p-1"
        placeholder="bitcoin..."
        onChange={(event) => {
          setSearchCoins(event.target.value);
        }}
      />
      {filterCoins.slice((page - 1) * 10, (page - 1) * 10 + 10).map((item) => {
        const {
          id,
          symbol,
          name,
          image,
          current_price,
          price_change_percentage_24h,
          ath,
          atl,
          total_volume,
        } = item;
        const vol = Math.floor(total_volume);
        return (
          <Link
            to={`/coin/${id}`}
            key={name}
            style={{ textDecoration: "none" }}
          >
            <ul class="list-group list-group-horizontal p-1">
              <li
                class={
                  darkMood
                    ? "list-group-item fw-bold bg-light text-dark"
                    : "list-group-item fw-bold bg-dark text-light"
                }
              >
                <div className="fw-semibold">Symbol:</div>
                <img
                  className="image-fluid coin-logo me-1"
                  src={image}
                  alt={name}
                />
                {symbol}
              </li>
              <li
                class={
                  darkMood
                    ? "list-group-item fw-bold bg-light text-dark hideName"
                    : "list-group-item fw-bold bg-dark text-light hideName"
                }
              >
                <div className="fw-semibold">Name:</div>
                {name}
              </li>
              <li
                class={
                  darkMood
                    ? "list-group-item fw-bold bg-light text-dark"
                    : "list-group-item fw-bold bg-dark text-light"
                }
              >
                <div className="fw-semibold">Price:</div>
                <div
                  className={
                    price_change_percentage_24h > 0
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  ${decimals(current_price)}
                </div>
              </li>
              <li
                class={
                  darkMood
                    ? "list-group-item fw-bold bg-light text-dark"
                    : "list-group-item fw-bold bg-dark text-light"
                }
              >
                <div className="fw-semibold">24H:</div>
                <div
                  className={
                    price_change_percentage_24h > 0
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  {price_change_percentage_24h}%
                </div>
              </li>
              <li
                class={
                  darkMood
                    ? "list-group-item fw-bold bg-light text-dark hide"
                    : "list-group-item fw-bold bg-dark text-light hide"
                }
              >
                <div className="fw-semibold">All-Time-High:</div>
                <div>${decimals(ath)}</div>
              </li>
              <li
                class={
                  darkMood
                    ? "list-group-item fw-bold bg-light hide"
                    : "list-group-item fw-bold bg-dark hide"
                }
              >
                <div className="fw-semibold">All-Time-Low:</div>
                <div>${decimals(atl)}</div>
              </li>
              <li
                class={
                  darkMood
                    ? "list-group-item fw-bold bg-light text-dark hide"
                    : "list-group-item fw-bold bg-dark text-light hide"
                }
              >
                <div className="fw-semibold">Volume:</div>${decimals(vol)}
              </li>
            </ul>
          </Link>
        );
      })}
      <Pagination
        class={darkMood ? "text-dark" : "text-light"}
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          padding: 20,
        }}
        count={filterCoins.length / 10}
        onChange={(_, value) => {
          setPage(value);
          window.scroll(0, 700);
        }}
      />
    </section>
  );
};

export default Coin;
