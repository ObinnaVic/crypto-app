import React from "react";
import { useGlobalContext } from "./context";
import coingeckoApp from "../img/coingeckoApp.webp";
import coingeckoAppTwo from "../img/coingeckoAppTwo.webp";
import scan from "../img/scan.svg";
import apple from "../img/apple.svg";
import playstore from "../img/playstore.svg";

const downloadLink =
  "https://play.google.com/store/apps/details?id=com.coingecko.coingeckoapp&_branch_match_id=1039984955006713938&utm_source=CoinGecko&utm_campaign=cg_footer&utm_medium=cg_footer&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT87PzEtPTc7O10ssKNDLyczL1k%2FLzy9JLdJNzEspys9MAQDHR8xGKQAAAA%3D%3D";

const applestore =
  "https://apps.apple.com/us/app/coingecko-live-crypto-prices/id1390323960?_branch_match_id=1039984955006713938&utm_source=CoinGecko&utm_campaign=cg_landing&utm_medium=cg_landing_page&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT87PzEtPTc7O10ssKNDLyczL1s9JzEsBCupm5hcDAH1iL5gmAAAA";
const Download = ({ user }) => {
  const { darkMood, changeBackground } = useGlobalContext();

  return (
    <main
      className={
        darkMood ? "bg-light text-dark pb-3" : "bg-dark text-light pb-3"
      }
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
      <div className="row m-4">
        <div className="col-lg-6 col-sm-12">
          <div className="p-4">
            <h1>Comprehensive & Powerful. Meet CoinGecko's Crypto App.</h1>
            <p>
              Largest collection of unbiased crypto market data, actionable
              insights, news, tools, and more in one place.
            </p>
            <p>Best of all? Free.</p>
            <p>
              Get the CoinGecko app from the app stores, scan the QR code, or
              download the .apk file.
            </p>
            <div className="d-flex download-container">
              <img className="m-2" src={scan} alt="scan-image" />
              <div className="d-flex flex-column align-items-center m-2">
                <a href={downloadLink}>
                  <img className="download" src={playstore} alt="playstore" />
                </a>
                <a href={applestore}>
                  <img className="download" src={apple} alt="apple" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
          <div>
            <img style={{ width: "100%" }} src={coingeckoApp} alt="app image" />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center p-5">
        <h1>The Crypto World is in your hands</h1>
        <p>
          Over 12,000+ Cryptocurrencies tracked across 500+ crypto exchanges
          worldwide.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-6 col-sm-12 justify-content-center">
          <div className="d-flex justify-content-center">
            <img
              style={{ width: "80%" }}
              src={coingeckoAppTwo}
              alt="app image"
            />
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="p-5 d-flex flex-column justify-content-center">
            <h1>Industry-trusted Crypto Prices</h1>
            <p>Stay ahead of the competition.</p>
            <p>
              Invested? Interested in Crypto? Stay updated with the markets
              using the ultimate crypto app powered by our live,
              industry-trusted data.
            </p>
            <p>
              See for yourself why our data is preferred by and powers Trezor,
              Ledger, Etherscan, Trust Wallet, Metamask and over hundreds other
              leading crypto platforms.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Download;
