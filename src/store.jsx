import { configureStore } from "@reduxjs/toolkit";
import clockReducer from "./features/clock/clockSlice";
import calculatorReducer from './features/calculator/calculatorSlice';

export const store = configureStore({
    reducer: {
        clock: clockReducer,
        calculator: calculatorReducer,
    },
})