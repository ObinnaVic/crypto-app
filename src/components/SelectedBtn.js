import React from "react";

const Selected = ({ children, active, onClick }) => {
  return (
    <span
      onClick={onClick}
      style={{
        border: "1px solid gold",
        borderRadius: 5,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        margin: 10,
        fontFamily: "Montserrat",
        cursor: "pointer",
        backgroundColor: active ? "gold" : "",
        color: active ? "black" : "",
        fontWeight: active ? 700 : 500,
        "&:hover": {
          backgroundColor: "gold",
          color: "black",
        },
        width: "22%",
      }}
    >
      {children}
    </span>
  );
};

export default Selected;
