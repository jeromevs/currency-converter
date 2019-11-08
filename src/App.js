import React, { useState } from "react";
import "./App.css";
import Dollar from "./images/dollar.png";
import Arrow from "./images/arrow.png";
import Arrowup from "./images/arrowup.png";
import rates from "./Rates";
const deviseItems = [];
Object.keys(rates).forEach(devise => {
  deviseItems.push(devise);
});
console.log(deviseItems);

function App() {
  const [currency1, setCurrency1] = useState("");
  const [currency2, setCurrency2] = useState("");
  const [button, setButton] = useState("");
  const [devise1, setDevise1] = useState("USD");
  const [devise2, setDevise2] = useState("EUR");

  const handleSubmit = event => {
    event.preventDefault();
    if (button === "down") {
      setCurrency2((currency1 * rates[devise2]) / rates[devise1]);
    } else if (button === "up") {
      setCurrency1((currency2 * rates[devise1]) / rates[devise2]);
    }
  };

  return (
    <>
      <div className="convertisseur">
        <div className="header">
          <img
            src={Dollar}
            alt="dollar"
            style={{ height: "50px", width: "100px" }}
          />
          <h1>Eur to Usd</h1>
          <img
            src={Dollar}
            alt="dollar"
            style={{ height: "50px", width: "100px" }}
          />
        </div>

        <form autoComplete="off" onSubmit={handleSubmit}>
          <p>
            <input
              type="text"
              name="toconvert"
              placeholder="0"
              value={currency1}
              onChange={event => {
                setCurrency1(event.target.value);
              }}
            />
            <select
              value={devise1}
              onChange={event => {
                setDevise1(event.target.value);
              }}
            >
              {deviseItems.map(deviseName => {
                return <option value={deviseName}>{deviseName}</option>;
              })}
            </select>
          </p>
          <div className="arrow">
            <button
              onClick={() => {
                setButton("down");
              }}
              name="down"
              type="submit"
            >
              <img
                src={Arrow}
                alt="arrow"
                style={{ height: "80px", width: "80px", border: "none" }}
              />
            </button>

            <button
              onClick={() => {
                setButton("up");
              }}
              name="up"
              type="submit"
            >
              <img
                src={Arrowup}
                alt="arrowup"
                style={{ height: "80px", width: "80px", border: "none" }}
              />
            </button>
          </div>
          <p>
            <input
              type="text"
              name="toconverted"
              placeholder="0"
              value={currency2}
              onChange={event => {
                setCurrency2(event.target.value);
              }}
            />
            <select
              value={devise2}
              onChange={event => {
                setDevise2(event.target.value);
              }}
            >
              {deviseItems.map(deviseName => {
                return <option value={deviseName}>{deviseName}</option>;
              })}
            </select>
          </p>
        </form>
      </div>
    </>
  );
}

export default App;
