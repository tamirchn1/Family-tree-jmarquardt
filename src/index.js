import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";

const Input = () => {
  return (
    <input
      placeholder="
Enter Full Name Here...
"
    />
  );
};

const Form = () => {
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = (event) => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };

  return (
    <div>
      <button onClick={onAddBtnClick}>Add input</button>
      {inputList}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
