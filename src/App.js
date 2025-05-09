
import React, { useState } from 'react';
import './App.css';
import { evaluate } from 'mathjs';

function App() {

  const [result, setResult] = useState("");
  const [isCal, setisCal] = useState(false);

  const calculate = () => {
    try {
      setResult(evaluate(result));
      setisCal(true);
    } catch (error) {
      setResult("Error");
      setisCal(true);
    }
  }
  const handleClick = (value) => {

    const op = ['+', '-', '*', '/', '.'];
    if (op.includes(value) && op.includes(result.toString().slice(-1))) {
      return;
    }

    if (isCal) {
      setResult("");
      setisCal(false);
    } 
    setResult(prev => prev + value);

  }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="container border p-4 bg-dark rounded-4" style={{width: "300px"}}>
        <div className="text-center mb-3">
          <input type="text" className="form-control text-end" style={{fontSize:"25px"}} value={result} placeholder="0" readOnly/>
        </div>
        <div className='d-flex justify-content-center'>
         <button className="btn btn-secondary m-1 w-25" onClick={()=>setResult("")}>AC</button>
         <button className="btn btn-secondary m-1 w-25" onClick={()=>setResult(prev=>prev.toString().slice(0,-1))}>DEL</button>
         <button className="btn btn-secondary m-1 w-25" onClick={()=>setResult(prev=>prev/100)}>%</button>
         <button className="btn btn-secondary m-1 w-25" onClick={()=>handleClick("/")}>÷</button>
        </div>
        <div className='d-flex justify-content-center'>
          <button className="btn btn-secondary m-1 w-25" onClick={()=>handleClick("7")}>7</button>
          <button className="btn btn-secondary m-1 w-25" onClick={()=>handleClick("8")}>8</button>
          <button className="btn btn-secondary m-1 w-25" onClick={()=>handleClick("9")}>9</button>
          <button className="btn btn-secondary m-1 w-25" onClick={()=>handleClick("*")}>*</button>
        </div>
        <div className='d-flex justify-content-center'>
          <button className="btn btn-secondary m-1 w-25" onClick={()=>handleClick("4")}>4</button>
          <button className="btn btn-secondary m-1 w-25" onClick={()=>handleClick("5")}>5</button>
          <button className="btn btn-secondary m-1 w-25" onClick={()=>handleClick("6")}>6</button>
          <button className="btn btn-secondary m-1 w-25" onClick={()=>handleClick("-")}>-</button>
        </div>
        <div className='d-flex justify-content-center'>
          <button className="btn btn-secondary m-1 w-25" onClick={()=>handleClick("1")}>1</button>
          <button className="btn btn-secondary m-1 w-25" onClick={()=>handleClick("2")}>2</button>
          <button className="btn btn-secondary m-1 w-25" onClick={()=>handleClick("3")}>3</button>
          <button className="btn btn-secondary m-1 w-25" onClick={()=>handleClick("+")}>+</button>
        </div>
        <div className='d-flex justify-content-center'>
          <button className="btn btn-secondary m-1 w-25" onClick={()=>handleClick(".")}>.</button>
          <button className="btn btn-secondary m-1 w-25" onClick={()=>handleClick("0")}>0</button>
          <button className="btn btn-secondary m-1 w-50" onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
