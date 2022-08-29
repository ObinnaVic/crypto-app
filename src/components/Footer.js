import React from "react";
import coinLogo from "../img/coinLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="d-flex flex-column align-items-center bg-secondary p-3">
      <img className="logo" src={coinLogo} alt="logo" />
      <div>
        <span>
          <a
            className="text-light text-decoration-none me-1"
            href="https://www.youtube.com/c/CoinTrackerIO"
          >
            Youtube -{" "}
          </a>
        </span>
        <Link className="text-light text-decoration-none" to="download">
          Download CoinGecko
        </Link>
      </div>
      <span className="text-secondary">
        @ 2022 CoinTracker. All Rights Reserved.
      </span>
    </div>
  );
};

export default Footer;
