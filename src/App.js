import React, { useState } from "react";

export default function Calculator() {
  const [result, setResult] = useState("");

  const handleButtonClick = (event) => {
    const value = event.target.value;

    if (value === "C") {
      setResult("");
    } else if (value === "=") {
      try {
        setResult(eval(result) || "");
      } catch (error) {
        setResult("Error");
      }
    } else {
      setResult(result + value);
    }
  };

  return (
    <div>
      <input type="text" value={result} />
      <br />
      <button value="1" onClick={handleButtonClick}>
        1
      </button>
      <button value="2" onClick={handleButtonClick}>
        2
      </button>
      <button value="3" onClick={handleButtonClick}>
        3
      </button>
      <button value="+" onClick={handleButtonClick}>
        +
      </button>
      <br />
      <button value="4" onClick={handleButtonClick}>
        4
      </button>
      <button value="5" onClick={handleButtonClick}>
        5
      </button>
      <button value="6" onClick={handleButtonClick}>
        6
      </button>
      <button value="-" onClick={handleButtonClick}>
        -
      </button>
      <br />
      <button value="7" onClick={handleButtonClick}>
        7
      </button>
      <button value="8" onClick={handleButtonClick}>
        8
      </button>
      <button value="9" onClick={handleButtonClick}>
        9
      </button>
      <button value="*" onClick={handleButtonClick}>
        *
      </button>
      <br />
      <button value="C" onClick={handleButtonClick}>
        C
      </button>
      <button value="0" onClick={handleButtonClick}>
        0
      </button>
      <button value="=" onClick={handleButtonClick}>
        =
      </button>
      <button value="/" onClick={handleButtonClick}>
        /
      </button>
      <br />
    </div>
  );
}
