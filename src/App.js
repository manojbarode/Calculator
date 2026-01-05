import { useState } from "react";
import "./App.css";

const Calculator = () => {
  const [value, setValue] = useState("");
  const [isOn, setIsOn] = useState(false);

  const add = (val) => {
    if (isOn) setValue((prev) => prev + val);
  };

  const calculate = () => {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Error");
    }
  };

  const clearDisplay = () => setValue("");

  const deleteLast = () => setValue((prev) => prev.slice(0, -1));

  const turnOn = () => {
    setIsOn(true);
    setValue("");
  };

  const turnOff = () => {
    setIsOn(false);
    setValue("");
  };

  return (
    <div className="calc-wrapper">
      <div className="calculator">

        {/* 🔆 DISPLAY WITH LIGHT EFFECT */}
        <input
          type="text"
          value={value}
          disabled
          className={`calc-display ${value && isOn ? "screen-on" : ""}`}
        />

        <div className="calc-buttons">
          <button disabled={!isOn} className="op" onClick={clearDisplay}>AC</button>
          <button disabled={!isOn} className="op" onClick={deleteLast}>DEL</button>
          <button disabled={!isOn} className="op" onClick={() => add("%")}>%</button>
          <button disabled={!isOn} className="op" onClick={() => add("/")}>÷</button>

          {[7,8,9].map(n => (
            <button key={n} disabled={!isOn} onClick={() => add(n)}>{n}</button>
          ))}
          <button disabled={!isOn} className="op" onClick={() => add("+")}>+</button>

          {[6,5,4].map(n => (
            <button key={n} disabled={!isOn} onClick={() => add(n)}>{n}</button>
          ))}
          <button disabled={!isOn} className="op" onClick={() => add("-")}>−</button>

          {[3,2,1].map(n => (
            <button key={n} disabled={!isOn} onClick={() => add(n)}>{n}</button>
          ))}
          <button disabled={!isOn} className="op" onClick={() => add("*")}>×</button>

          <button disabled={!isOn} className="zero" onClick={() => add("0")}>0</button>
          <button disabled={!isOn} onClick={() => add(".")}>.</button>
          <button disabled={!isOn} className="equal" onClick={calculate}>=</button>
        </div>

        <div className="power">
          <button className="on" onClick={turnOn}>ON</button>
          <button className="off" onClick={turnOff}>OFF</button>
        </div>

      </div>
    </div>
  );
};

export default Calculator;
