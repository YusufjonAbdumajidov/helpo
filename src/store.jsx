import { configureStore } from "@reduxjs/toolkit";
import clockReducer from "./features/clock/clockSlice";
import calculatorReducer from './features/calculator/calculatorSlice';
import themeReducer from './features/theme/themeSlice';

export const store = configureStore({
    reducer: {
        clock: clockReducer,
        calculator: calculatorReducer,
        theme: themeReducer,
    },
})