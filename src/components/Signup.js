import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./context";

const SignIn = ({ setUser }) => {
  const { darkMood } = useGlobalContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      return;
    }
    setUser({ name: name, email: email });
    navigate("/home");
  };
  return (
    <section
      className={
        darkMood
          ? "d-flex flex-column justify-content-center align-items-center bg-light text-dark"
          : "d-flex flex-column justify-content-center align-items-center bg-dark text-light"
      }
      style={{ height: "70vh" }}
    >
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column align-items-center bg-success p-4"
      >
        <h4 style={{ textDecoration: "underline" }}>SIGN UP</h4>
        <label htmlFor="name" className="form-label fw-bold">
          Name
        </label>
        <input
          type="text"
          className="p-2 mb-2 w-100 border-0"
          value={name}
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email" className="form-label fw-bold">
          Email
        </label>
        <input
          type="text"
          className="p-2 mb-2 w-100 border-0"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn border-dark text-dark" type="submit">
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default SignIn;
