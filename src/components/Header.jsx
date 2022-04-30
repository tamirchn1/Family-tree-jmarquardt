import React from "react";

function Header() {
  return (
    <h1>
      family tree - Jmarquardt{" "}
      <img
        alt="Jmarquardt logo"
        className="logo"
        src={require("../../src/images/logo jmar.png")}
      />
    </h1>
  );
}

export default Header;
