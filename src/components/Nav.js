import React from "react";
import { useGlobalContext } from "./context";
import { Outlet } from "react-router-dom";
import coinLogo from "../img/coinLogo.png";

const NavBar = () => {
  const { decimals, darkMood, data, openSubNav } = useGlobalContext();

  return (
    <main>
      <div className={darkMood ? " bg-light text-dark" : " bg-dark text-light"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
          onClick={openSubNav}
          className="nav-icon"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
      {data.map((item, index) => {
        const {
          coins_count,
          active_markets,
          total_mcap,
          total_volume,
          mcap_change,
        } = item;
        return (
          <main
            className={
              darkMood
                ? "container-fluid bg-light px-2 text-dark d-flex align-items-center navbar-nav"
                : "container-fluid d-flex bg-dark px-2 text-light align-items-center navbar-nav"
            }
            key={index}
          >
            <img className="centered-logo mb-3" src={coinLogo} alt="logo" />
            <h6 className="me-2 nav-text">
              Coins{" "}
              <span className="text-primary">${decimals(coins_count)}</span>
            </h6>
            <h6 className="me-2 d-flex nav-text">
              Active Markets:{" "}
              <span className="text-primary">${decimals(active_markets)}</span>
            </h6>
            <h6 className="me-2 d-flex nav-text">
              Total mcap: {""}
              <span className="text-primary">${decimals(total_mcap)}</span>
            </h6>
            <h6 className="me-2 d-flex nav-text">
              Total volume: {""}
              <span className="text-primary">${decimals(total_volume)}</span>
            </h6>
            <h6 className="me-2 nav-text">
              Mcap Change: {""}
              <span
                className={mcap_change < 0 ? "text-danger" : "text-success"}
              >
                {mcap_change}%
              </span>
            </h6>
          </main>
        );
      })}
      <Outlet />
    </main>
  );
};

export default NavBar;
