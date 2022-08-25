import React from "react";
import { useGlobalContext } from "./context";
import Coin from "./Coin";
import portfolio from "../img/portfolio.webp";
import { Link } from "react-router-dom";
import Trending from "./Trending";

const info =
  "Total cryptocurrency trading volume in the last day is at $89.7 Billion. Bitcoin dominance is at 38.7% and Ethereum dominance is at 18.1%. CoinGecko is now tracking 13,090 cryptocurrencies. Popular trends of the industry right now are DeFi and Play to Earn.";

const Body = ({ user }) => {
  const {
    decimals,
    data,
    changeBackground,
    darkMood,
    showSwitch,
    switchBtn,
    readMore,
    readFullText,
  } = useGlobalContext();
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
      <section className="container-fluid">
        <div className="row py-2 m-0">
          <div className="col-lg-6 col-sm-12 mt-5 pe-5">
            <h1>
              Free & Powerful Crypto<br></br> Portfolio Tracker
            </h1>
            <p>
              Track your crypto earnings like a pro, with a user-friendly and
              reliable portfolio tracker that you can rely on
            </p>
            <div className="btnlink mb-4 mt-5">
              <Link to="/exchanges">
                <button className="bg-primary p-2 border-light">Markets</button>
              </Link>
              <Link to="/download">
                <button className="bg-success p-2 mx-3 border-light">
                  GET THE APP
                </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <img
              src={portfolio}
              alt="portfolio"
              className="portfolio img-fluid"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 col-sm-12 mt-3">
            <div className="d-flex align-items-center">
              <h3>Cryptocurrency Prices by Market Cap</h3>
              <button class="switch ms-4 border-light" onClick={switchBtn}>
                <span
                  class={showSwitch ? "slider active round" : "slider round"}
                ></span>
              </button>
              <p className="fw-bold pt-3 ms-2">Show Stats</p>
            </div>
            <div>
              {data.map((item, index) => {
                const { mcap_change } = item;
                return (
                  <div key={index}>
                    The global cryptocurrency market cap today is $1.15
                    Trillion, a{" "}
                    <span
                      className={
                        mcap_change > 0
                          ? "text-success fw-bold"
                          : "text-danger fw-bold"
                      }
                    >
                      {mcap_change}%
                    </span>{" "}
                    change in the last 24 hours.
                  </div>
                );
              })}
              <span>{readMore ? info : info.substring(0, 100)}</span>
              <button
                onClick={readFullText}
                className="btn btn-link border-0 p-0"
              >
                {readMore ? "Hide" : "Read More..."}
              </button>
            </div>
          </div>
        </div>
        {data.map((item, index) => {
          const {
            total_mcap,
            total_volume,
            coins_count,
            btc_d,
            mcap_change,
            volume_change,
          } = item;
          return (
            <main className={showSwitch ? "" : "d-none"} key={index}>
              <div className="row p-3 slide-info">
                <div
                  className={
                    mcap_change > 0
                      ? "col-lg-3 col-md-6 col-sm-12 shadow-lg border border-2 border-success rounded mb-1 me-1"
                      : "col-lg-3 col-md-6 col-sm-12 shadow-lg border border-2 border-danger rounded mb-1 me-1"
                  }
                >
                  <div className="d-flex">
                    <h5>${decimals(total_mcap)}</h5>
                    <span
                      className={
                        mcap_change > 0
                          ? "fs-6 mb-2 ms-2 fw-bold text-success"
                          : "fs-6 mb-2 ms-2 fw-bold text-danger"
                      }
                    >
                      {mcap_change}%
                    </span>
                  </div>
                  <p>Market Capitalisation</p>
                </div>
                <div
                  className={
                    volume_change > 0
                      ? "col-lg-3 col-md-6 col-sm-12 shadow-lg border border-2 border-success rounded mb-1 me-1"
                      : "col-lg-3 col-md-6 col-sm-12 shadow-lg border border-2 border-danger rounded mb-1 me-1"
                  }
                >
                  <div className="d-flex">
                    <h5>${decimals(total_volume)}</h5>
                    <span
                      className={
                        volume_change > 0
                          ? "fs-6 mb-2 ms-2 fw-bold text-success"
                          : "fs-6 mb-2 ms-2 fw-bold text-danger"
                      }
                    >
                      {volume_change}%
                    </span>
                  </div>
                  <p>Trading Volume</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 shadow border rounded border-3 mb-1 me-1">
                  <h5>{btc_d}%</h5>
                  <p>Bitcoin Dominance</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 shadow border rounded border-3 mb-1 me-1">
                  <h5>{decimals(coins_count)}</h5>
                  <p># of Coins</p>
                </div>
              </div>
            </main>
          );
        })}
        <Coin />
        <Trending />
        <div className="py-5">
          <h3>What is Crypto Market Cap?</h3>
          <p>
            Crypto market cap is the total value of all the coins of a
            particular cryptocurrency that have been mined or are in
            circulation. Market capitalization is used to determine the ranking
            of cryptocurrencies. The higher the market cap of a particular
            crypto coin, the higher its ranking and share of the market. Crypto
            market cap is calculated by multiplying the total number of coins in
            circulation by its current price. For instance, to calculate the
            market cap of Ethereum, all you need to do is multiply the total
            number of Ethereum in circulation by the current price of one
            Ethereum and you will get its market cap.
          </p>
          <h3>Where to Check Cryptocurrency Prices?</h3>
          <p>
            You can track over 10,000 crypto prices on CoinGecko across more
            than 50 currencies. Popular cryptocurrency pairs include BTC to USD,
            ETH to USD, and SLP to PHP. You can also track metrics such as 24
            hour trading volume, market capitalization, price chart, historical
            performance chart, the circulating supply, and more. Sign up to use
            CoinGecko’s crypto portfolio to track the performance of your
            portfolio. You may also check out GeckoTerminal (currently in beta),
            our comprehensive multichain on-chain charting tool featuring live
            charts, current trades, market sentiment and more as it happens in
            real time! CoinGecko also has a mobile app that enables you to track
            cryptocurrencies on Android and IOS.
          </p>
          <h3>How to compare Cryptocurrencies Market Cap?</h3>
          <div>
            As a financial metric, market cap allows you to compare the total
            circulating value of one cryptocurrency with another. Large cap
            cryptocurrencies such as Bitcoin and Ethereum have a market cap of
            over $10 billion. They typically consist of protocols that have
            demonstrated track records, and have a vibrant ecosystem of
            developers maintaining and enhancing the protocol, as well as
            building new projects on top of them. While market cap is a simple
            and intuitive comparison metric, it is not a perfect point of
            comparison. Some cryptocurrency projects may appear to have inflated
            market cap through price swings and the tokenomics of their supply.
            As such, it is best to use this metric as a reference alongside
            other metrics such as trading volume, liquidity, fully diluted
            valuation, and fundamentals during your research process.
          </div>
        </div>
      </section>
    </main>
  );
};

export default Body;
