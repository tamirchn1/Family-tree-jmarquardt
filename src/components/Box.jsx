import React, { useState } from "react";
import { cardDelete } from "../functions";

const Input = () => {
  return (
    <div className="box w-lg-25 rounded">
      <button
        type="button"
        className="delete btn-outline-dark btn"
        onClick={cardDelete}
      >
        x
      </button>
      <div>
        <a
          class="btn"
          data-bs-toggle="collapse"
          href="#details"
          role="button"
          aria-expanded="false"
          aria-controls="details"
        >
          <input
            type="text"
            className="btn full-name"
            placeholder="Enter full name here..."
          />
        </a>
        <div class="collapse btn d-flex justify-content-between" id="details">
          <button className="btn btn-primary">Add Child</button>
          <button className="btn btn-primary">Add Parent</button>
        </div>
      </div>
      <br />
    </div>
  );
};

const Box = () => {
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = () => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };

  return (
    <div className="text-center mt-5">
      <a>
        <button className="btn btn-primary add-person" onClick={onAddBtnClick}>
          Add Person
        </button>

        {inputList}
      </a>
    </div>
  );
};

export { Box, Input };
