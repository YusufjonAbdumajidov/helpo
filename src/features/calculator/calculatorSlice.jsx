import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentOperand: null,
    previousOperand: null,
    operation: '',
    overwrite: false,
};

const evaluate = ({ currentOperand, previousOperand, operation }) => {
  const prev = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  if (isNaN(prev) || isNaN(current)) return ""
  let computation = ""
  switch (operation) {
    case "+":
      computation = prev + current
      break
    case "-":
      computation = prev - current
      break
    case "x":
      computation = prev * current
      break
    case "÷":
      computation = prev / current
      break
    case "%":
      computation = ((current / prev) * 100)
      break
    default: console.log("Error in operation");
  }

  return computation.toString()
}



const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        addDigit: (state, { payload }) => {
            if(state.overwrite){
                return{
                    ...state,
                    currentOperand: payload.digit,
                    overwrite: false,
                }
            }
            if(payload === '0' && state.currentOperand === "0"){
                return state;
            }
            if (payload === "." && state.currentOperand.includes(".")) {
                return state
            }
            return {
                ...state,
                currentOperand: `${state.currentOperand || ""}${payload}`,
            }
        },
        clear: () => {
            return  {
                currentOperand: null,
                previousOperand: null,
                operation: '',
            }
        },
        chooseOperation: (state, { payload }) => {
            if (state.currentOperand == null && state.previousOperand == null) {
                return state
            }
            if (state.currentOperand == null) {
                return {
                  ...state,
                  operation: payload,
                }
            }
            if (state.previousOperand == null) {
                return {
                  ...state,
                  operation: payload,
                  previousOperand: state.currentOperand,
                  currentOperand: null,
                }
            }
            return {
                ...state,
                previousOperand: evaluate(state),
                operation: payload,
                currentOperand: null,
            }
        },
        deleteDigit: (state)=> {
            if(state.overwrite){
                return{
                    ...state,
                    overwrite: false,
                    currentOperand: null,
                }
            }
            if (state.currentOperand == null) return state;
            if (state.currentOperand.length === 1) {
              return { ...state, currentOperand: null }
            }
            return {
                ...state,
                currentOperand: state.currentOperand.slice(0, -1),
            }
        },
        calculate: (state) => {
            if(
                state.operation == null ||
                state.currentOperand == null ||
                state.previousOperand == null
            ){
                return state
            }
            return {
                ...state,
                overwrite: true,
                previousOperand: null,
                operation: null,
                currentOperand: evaluate(state),
            }
        }
    },
});

export const { addDigit, clear, 
    chooseOperation, deleteDigit, calculate } = calculatorSlice.actions;

export default calculatorSlice.reducer;