import { useState } from "react";

function Button() {
  const [randomNumber, setRandomNumber] = useState(0);

  const handleClick = () => {
    const randomNumber = Math.random() * 100;
    setRandomNumber(Math.round(randomNumber));
  };

  function getStyles() {
    if (randomNumber === 0) {
      return {
        backgroundColor: "blue",
        color: "white",
        padding: "10px",
        borderRadius: "15px",
        border: "none",
      };
    } else if (randomNumber % 2 === 0) {
      return {
        backgroundColor: "green",
        color: "white",
        padding: "10px",
        borderRadius: "15px",
        border: "none",
      };
    } else {
      return {
        backgroundColor: "red",
        color: "white",
        padding: "10px",
        borderRadius: "15px",
        border: "none",
      };
    }
  }

  return (
    <>
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        Click Me
      </button>

      {randomNumber !== null && (
        <h1
          style={{
            ...getStyles(),
          }}
        >
          Random Numbe: {randomNumber}
        </h1>
      )}
    </>
  );
}

export default Button;
