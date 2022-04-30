import React from "react";
import { cardDelete, addChild, addParent } from "../functions";

function Person() {
  return (
    <div className="box">
      <input type="text" placeholder="Enter Full Name Here" />
      <button className="delete" onClick={cardDelete}>
        x
      </button>
      <br />
      <button onClick={addChild}>add child</button>
      <button onClick={addParent}>add parent</button>
    </div>
  );
}

export default Person;
