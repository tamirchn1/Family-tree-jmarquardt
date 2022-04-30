import React from "react";
import { cardDelete, addChild, addParent } from "../functions";

function Person() {
  return (
    <div className="box w-lg-25 rounded">
      <button
        type="button"
        className="delete btn-outline-dark btn"
        onClick={cardDelete}
      >
        x
      </button>
      <input
        type="text"
        className="mt-2"
        placeholder="Enter Full Name Here..."
      />

      <br />
    </div>
  );
}

export default Person;
