import React, { } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDigit, clear, chooseOperation, deleteDigit, calculate } from '../features/calculator/calculatorSlice';


const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
})
const formatOperand = (operand) =>{
  if(operand == null) return;
  const [ integer, decimal ] = operand.split(".");
  if(decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}

const Calculator = () => {
  const dispatch = useDispatch();
  const { currentOperand, previousOperand, operation } = useSelector((store)=> store.calculator);
  
  return <div className="calculatorContainer">
    <h1>Calculator</h1>
    <div className="calculator">
      <section className="display">
        <div className="previous-operand">{formatOperand(previousOperand)} {operation}</div>
        <div className="current-operand">{formatOperand(currentOperand)}</div>
      </section>
      <div className="calButtons">
          <section onClick={() => dispatch(deleteDigit())}>del</section>
          <section onClick={() => dispatch(chooseOperation('%'))}>%</section>
          <section onClick={()=> dispatch(clear())}>ac</section>
          <section onClick={()=> dispatch(addDigit(7))}>7</section>
          <section onClick={()=> dispatch(addDigit(8))}>8</section>
          <section onClick={()=> dispatch(addDigit(9))}>9</section>
          <section onClick={() => dispatch(chooseOperation('÷'))}>÷</section>
          <section onClick={()=> dispatch(addDigit(4))}>4</section>
          <section onClick={()=> dispatch(addDigit(5))}>5</section>
          <section onClick={()=> dispatch(addDigit(6))}>6</section>
          <section onClick={() => dispatch(chooseOperation('x'))}>x</section>
          <section onClick={()=> dispatch(addDigit(1))}>1</section>
          <section onClick={()=> dispatch(addDigit(2))}>2</section>
          <section onClick={()=> dispatch(addDigit(3))}>3</section>
          <section onClick={() => dispatch(chooseOperation('-'))}>-</section>
          <section onClick={()=> dispatch(addDigit(0))}>0</section>
          <section onClick={()=> dispatch(addDigit("."))}>.</section>
          <section onClick={()=> dispatch(calculate())}>=</section>
          <section onClick={() => dispatch(chooseOperation('+'))} >+</section>
      </div>
    </div>
  </div>
}

export default Calculator