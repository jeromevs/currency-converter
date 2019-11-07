import React, { useState } from "react";
import "./App.css";
import Dollar from "./images/dollar.png";
import Arrow from "./images/arrow.png";
import Arrowup from "./images/arrowup.png";

function App() {
  const [currency, setCurrency] = useState(0);
  const [convertedCurrency, setConvertedCurrency] = useState(0);

  let euro = 1;
  let dollar = 1.139283;

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

        <form
          onSubmit={event => {
            event.preventDefault();

            let newValue = (currency * dollar) / euro;
            setConvertedCurrency(newValue);
          }}
        >
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
          <div className="arrow">
            <button name="down" type="submit">
              <img
                src={Arrow}
                alt="arrow"
                style={{ height: "50px", width: "50px" }}
              />
            </button>

            <button name="up" type="submit">
              <img
                src={Arrowup}
                alt="arrowup"
                style={{ height: "50px", width: "50px" }}
              />
            </button>
          </div>

          <p>
            <input
              type="text"
              name="toconverted"
              placeholder="0"
              value={convertedCurrency}
              onChange={event => {
                setConvertedCurrency(event.target.value);
              }}
            />
            $
          </p>
        </form>
      </div>
    </>
  );
}

export default App;
