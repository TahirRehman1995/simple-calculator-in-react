import React, { useState } from 'react';
import './components/App.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (display === '0' || display === result) {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const calculateResult = () => {
    try {
      const evalResult = Function('"use strict";return (' + display + ')')();
      setResult(display + ' =');
      setDisplay(String(evalResult));
    } catch (error) {
      setResult('Error');
      setDisplay('');
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
    setResult('');
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="result">{result}</div>
        <div className="output">{display}</div>
      </div>
      <div className="buttons">
        <div className="row">
          <button className="button" onClick={() => handleClick('7')}>
            7
          </button>
          <button className="button" onClick={() => handleClick('8')}>
            8
          </button>
          <button className="button" onClick={() => handleClick('9')}>
            9
          </button>
          <button className="operator" onClick={() => handleClick('/')}>
            /
          </button>
        </div>
        <div className="row">
          <button className="button" onClick={() => handleClick('4')}>
            4
          </button>
          <button className="button" onClick={() => handleClick('5')}>
            5
          </button>
          <button className="button" onClick={() => handleClick('6')}>
            6
          </button>
          <button className="operator" onClick={() => handleClick('*')}>
            *
          </button>
        </div>
        <div className="row">
          <button className="button" onClick={() => handleClick('1')}>
            1
          </button>
          <button className="button" onClick={() => handleClick('2')}>
            2
          </button>
          <button className="button" onClick={() => handleClick('3')}>
            3
          </button>
          <button className="operator" onClick={() => handleClick('-')}>
            -
          </button>
        </div>
        <div className="row">
          <button className="button" onClick={() => handleClick('0')}>
            0
          </button>
          <button className="button" onClick={() => handleClick('.')}>
            .
          </button>
          <button className="equal" onClick={calculateResult}>
            =
          </button>
          <button className="operator" onClick={() => handleClick('+')}>
            +
          </button>
        </div>
        <div className="row">
          <button className="clear" onClick={clearDisplay}>
            C
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
