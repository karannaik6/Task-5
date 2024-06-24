import React, { useState } from 'react';
import Button from './Button';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {['7', '8', '9', '+'].map((val) => (
          <Button key={val} value={val} onClick={handleButtonClick} />
        ))}
        {['4', '5', '6', '-'].map((val) => (
          <Button key={val} value={val} onClick={handleButtonClick} />
        ))}
        {['1', '2', '3', '*'].map((val) => (
          <Button key={val} value={val} onClick={handleButtonClick} />
        ))}
        {['0', 'C', '=', '/'].map((val) => (
          <Button key={val} value={val} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
