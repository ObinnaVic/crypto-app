import React from "react";
import { useGlobalContext } from "./context";
import coinLogo from "../img/coinLogo.png";
import { NavLink } from "react-router-dom";

const SubNav = ({user}) => {
  const { darkMood, openNav, closeNav } = useGlobalContext();
  if(!user) {
    return (
      <main className={openNav ? "subnav open-subnav" : "subnav"}>
        <div className="close-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="25"
            fill="currentColor"
            class="bi bi-x-circle"
            viewBox="0 0 16 16"
            onClick={closeNav}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <div></div>
        <section
          className={
            darkMood
              ? "border-bottom border-top px-2 bg-light text-dark nav-con p-2"
              : "border-bottom border-top px-2 bg-dark text-light nav-con p-2"
          }
        >
          <img className="nav-logo" src={coinLogo} alt="logo" />
          <div className="d-flex">
            <h1>Please Sign In</h1>
          </div>
        </section>
      </main>
    );
  } else {
    return (
      <main className={openNav ? "subnav open-subnav" : "subnav"}>
        <div className="close-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="25"
            fill="currentColor"
            class="bi bi-x-circle"
            viewBox="0 0 16 16"
            onClick={closeNav}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <div></div>
        <section
          className={
            darkMood
              ? "border-bottom border-top px-2 bg-light text-dark nav-con p-2"
              : "border-bottom border-top px-2 bg-dark text-light nav-con p-2"
          }
        >
          <img className="nav-logo" src={coinLogo} alt="logo" />
          <div className="d-flex">
            <h5>
              <NavLink
                to="/home"
                className={darkMood ? "link text-dark" : "link text-light"}
                style={({ isActive }) => {
                  return { textDecoration: isActive ? "underline" : "" };
                }}
                onClick={closeNav}
              >
                Home -
              </NavLink>
            </h5>
            <h5>
              <NavLink
                to="/exchanges"
                className={darkMood ? "link text-dark" : "link text-light"}
                style={({ isActive }) => {
                  return { textDecoration: isActive ? "underline" : "" };
                }}
                onClick={closeNav}
              >
                Exchanges -
              </NavLink>
            </h5>
            <h5>
              <NavLink
                to="/download"
                className={darkMood ? "link text-dark" : "link text-light"}
                style={({ isActive }) => {
                  return { textDecoration: isActive ? "underline" : "" };
                }}
                onClick={closeNav}
              >
                Download App
              </NavLink>
            </h5>
          </div>
        </section>
      </main>
    );
  }
};

export default SubNav;
