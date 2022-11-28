import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import buttons from '../data/calculator';
import { calculate } from '../features/calculator/calculatorSlice';



const Calculator = () => {
  const dispatch = useDispatch();
  const [ nums, setNums ] = useState({
    num1: 0,
    num2: 0,
    operator: '',
  });
  // const arithmetic = operator =>{
  //   typeof operator === "string" ? setNums()
  // }
  console.log(nums)
  
  return <div className="calculatorContainer">
    <h1>Calculator</h1>
    <div className="calculator">
      <section className="display">0</section>
      <div className="calButtons">
          {buttons.map((button) => {
            const { id, type } = button;
            return <section
            onClick={() => dispatch(calculate(type))}
             className={type} key={id}>{type}</section>
          })}
      </div>
    </div>
  </div>
}

export default Calculator