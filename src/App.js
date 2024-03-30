import { useState } from 'react';

function App() {
  
  const [ calc, setCalc ] = useState("");
  const [ result, setResult ] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  // Updates calculations for display
  const updateCalc = value => {
    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
      ) {
        return;
      }
    setCalc(calc + value);

    // automatically calculates the result while updating the calculations
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }

  // Calculates the results when pressing "=" button
  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  // Delete the last digit or operators in the calculation
  const deleteLast = () => {
    if (calc == '') {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  }

  const deleteAll = ()=>{
    setCalc('')
    setResult('')
  }

  // Dynamically add the digits buttons
  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button 
          key={i} 
          onClick={() => updateCalc(i.toString())}>
            {i}
        </button>
      )
    }

    return digits;
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          { result ? <span>({result})</span> : '' }&nbsp;
          { calc || "0" }
        </div>
        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>

          <button onClick={() => deleteLast()}>x</button>
          <button onClick={() => deleteAll()}>Del</button>
        </div>
        <div className="digits">
          { createDigits() }
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
