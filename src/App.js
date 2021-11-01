import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import M from "materialize-css/dist/js/materialize.min.js";
import UserCard from "./components/userCards/UserCard";

const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const lowerEl = document.getElementById("lower");
const upperEl = document.getElementById("upper");
const symbolEl = document.getElementById("symbol");
const numberEl = document.getElementById("number");
const generateEl = document.getElementById("generate");

const randomFuncs = {
  lower: getRandomLower,
  upper: getRandomUpper,
  symbol: getRandomSymbol,
  number: getRandomNumber,
};
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomLower() {
  return String.fromCharCode(randomIntFromInterval(97, 122));
}
function getRandomUpper() {
  return String.fromCharCode(randomIntFromInterval(65, 90));
}
function getRandomNumber() {
  return String.fromCharCode(randomIntFromInterval(48, 57));
}
function getRandomSymbol() {
  const SYMBOLS = "<>?/.,:][)(-=+_";
  return SYMBOLS[randomIntFromInterval(0, SYMBOLS.length - 1)];
}

function getValAndGen() {
  let generatedPassword = "";
  let length = this.length;
  let lower = lowerEl.checked;
  let upper = upperEl.checked;
  let symbol = symbolEl.checked;
  let number = numberEl.checked;
  let count = lower + upper + symbol + number;
  let funcNames = [];
  console.log("getValGen func", length);
  let typeArr = [{ lower }, { upper }, { symbol }, { number }].filter((el) => {
    return Object.values(el)[0];
  });
  if (count <= 0) {
    alert("please check at least 1 checkbox");
    return;
  }

  typeArr.forEach((el) => {
    funcNames.push(randomFuncs[Object.keys(el)]);
  });
  if (length < 0) {
    alert("length must be at least 1");
    return;
  }

  for (let index = 0; index < length; index++) {
    let randomNums = randomIntFromInterval(0, funcNames.length - 1);
    generatedPassword += funcNames[randomNums]();
  }

  passwordEl.value = generatedPassword;
}

function copyPass() {
  navigator.clipboard.writeText(passwordEl.value);
  M.toast({
    html: "Password copied !!!",
    displayLength: 1000,
    inDuration: 600,
    outDuration: 600,
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".tooltipped");
  var instances = M.Tooltip.init(elems, {});
});

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <UserCard />
      </div>
      <header className="App-header">
        {/* <div className="container">
          <div className="content hoverable">
            <div className="input-field">
              <i
                className="material-icons prefix tooltipped"
                data-position="top"
                data-tooltip="Copy to clipboard"
                onClick={copyPass}
              >
                content_copy
              </i>
              <input
                readOnly
                placeholder=" "
                id="password"
                type="text"
                className="validate"
              />
              <label htmlFor="password" className="active">
                Password
              </label>
            </div>
            <div className="row">
              <div className="col m6 l6 s6">
                <div className="input-field">
                  <input
                    id="length"
                    type="number"
                    className="validate"
                    defaultValue="20"
                    min="1"
                    max="40"
                  />
                  <label htmlFor="length">Length</label>
                </div>
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <div className="col m6 l6 s6">
                <div className="row">
                  <label className="col s12 l6 m8">
                    <input
                      type="checkbox"
                      className="filled-in"
                      id="lower"
                      checked
                    />
                    <span>Contain lowercase</span>
                  </label>
                </div>
                <div className="row">
                  <label className="col s12 l6 m8">
                    <input
                      type="checkbox"
                      className="filled-in"
                      id="upper"
                      checked
                    />
                    <span>Contain UPPERCASE</span>
                  </label>
                </div>
                <div className="row">
                  <label className="col s12 l6 m8">
                    <input type="checkbox" className="filled-in" id="symbol" />
                    <span>Contain Symbols</span>
                  </label>
                </div>
                <div className="row">
                  <label className="col s12 l6 m8">
                    <input type="checkbox" className="filled-in" id="number" />
                    <span>Contain Numbers</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <button
                className="waves-effect waves-light btn col l12 m12 s12"
                id="generate"
                onClick={getValAndGen}
              >
                Generate Password
              </button>
            </div>
          </div> */}
        {/* </div> */}
      </header>
    </div>
  );
}

export default App;
