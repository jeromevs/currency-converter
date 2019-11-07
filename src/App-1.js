import React, { useState } from "react";
import "./App.css";
import Dollar from "./images/dollar.png";
import Arrow from "./images/arrow.png";

function App() {
  const [currency, setCurrency] = useState("");

  return (
    <>
      <div className="convertisseur">
        <div className="header">
          <img
            src={Dollar}
            alt="dollar"
            style={{ height: "30px", width: "100px" }}
          />
          <h1>Eur to Usd</h1>
          <img
            src={Dollar}
            alt="dollar"
            style={{ height: "30px", width: "100px" }}
          />
        </div>

        <form>
          <p>
            <input
              type="text"
              name="toconvert"
              placeholder="0"
              value={currency}
              onChange={event => {
                setCurrency(event.target.value);
              }}
            />
            €
          </p>
          <div>
            <img
              src={Arrow}
              alt="arrow"
              style={{ height: "50px", width: "50px" }}
            />
          </div>

          <p>
            <input
              type="text"
              name="toconverted"
              placeholder="0"
              value={currency * 1.139283}
            />
            $
          </p>
        </form>
      </div>
    </>
  );
}

export default App;
