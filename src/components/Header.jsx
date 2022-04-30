import React from "react";

function Header() {
  return (
    <h1 className="h2 mt-5">
      <a href="/">
        family tree - Jmarquardt{" "}
        <img
          alt="Jmarquardt logo"
          className="logo"
          src={require("../../src/images/logo jmar.png")}
        />
      </a>
      <h2 class="h3 mt-3">Build Your Family Tree!</h2>
    </h1>
  );
}

export default Header;
