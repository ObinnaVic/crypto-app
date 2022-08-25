import React, { useState } from "react";
import { useGlobalContext } from "./context";
import Pagination from "@mui/material/Pagination";

const Exchanges = ({ user }) => {
  const {
    decimals,
    darkMood,
    changeBackground,
    filterExchanges,
    setSearchExchange,
  } = useGlobalContext();
  const [page, setPage] = useState(1);

  return (
    <main className={darkMood ? "bg-light text-dark" : "bg-dark text-light"}>
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
      <input
        type="text"
        className="my-3 border-5 border-success rounded p-1"
        placeholder="binance..."
        onChange={(event) => {
          setSearchExchange(event.target.value);
        }}
      />
      {filterExchanges
        .slice((page - 1) * 10, (page - 1) * 10 + 10)
        .map((item) => {
          const { name, id, image, trade_volume_24h_btc, trust_score, url } =
            item;
          return (
            <section key={id}>
              <ul class="list-group list-group-horizontal border-0 p-1">
                <li
                  class={
                    darkMood
                      ? "list-group-item fw-bold bg-light text-dark"
                      : "list-group-item fw-bold bg-dark text-light"
                  }
                >
                  <img
                    className="image-fluid coin-logo me-1"
                    src={image}
                    alt={name}
                  />
                  {name}
                  <div>{url}</div>
                </li>
                <li
                  class={
                    darkMood
                      ? "list-group-item fw-bold bg-light text-dark hide"
                      : "list-group-item fw-bold bg-dark text-light hide"
                  }
                >
                  <div>Trust score:</div>
                  {trust_score}
                </li>
                <li
                  class={
                    darkMood
                      ? "list-group-item fw-bold bg-light text-dark"
                      : "list-group-item fw-bold bg-dark text-light"
                  }
                >
                  <div>24H trading Vol:</div>
                  {decimals(trade_volume_24h_btc.toString().slice(0, -8))}
                </li>
              </ul>
            </section>
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
        count={filterExchanges.length / 10}
        onChange={(_, value) => {
          setPage(value);
          window.scroll(0, 250);
        }}
      />
    </main>
  );
};

export default Exchanges;
