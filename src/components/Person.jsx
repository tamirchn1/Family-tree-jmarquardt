import React from "react";
import { cardDelete, addChild, addParent } from "../functions";

function Person() {
  return (
    <div className="box w-25 rounded">
      <button
        type="button"
        className="delete btn-outline-dark btn"
        onClick={cardDelete}
      >
        x
      </button>
      <input
        type="text"
        className="m-2"
        placeholder="Enter Full Name Here..."
      />

      <br />
      <button
        type="button"
        className="btn-outline-primary btn mx-2"
        onClick={addChild}
      >
        add child
      </button>
      <button
        type="button"
        className="btn-outline-primary btn"
        onClick={addParent}
      >
        add parent
      </button>
    </div>
  );
}

export default Person;
