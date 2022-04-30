import React, { useEffect, useState } from "react";
import { cardDelete, addChild, addParent } from "../functions";

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
      <input
        type="text"
        className="mt-2"
        placeholder="Enter Full Name Here..."
      />

      <br />
    </div>
  );
};

const Form = () => {
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = (event) => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };

  return (
    <div className="text-center mt-5">
      <button className="btn btn-primary add-person" onClick={onAddBtnClick}>
        Add Child
      </button>
      {inputList}
    </div>
  );
};

export { Form, Input };
