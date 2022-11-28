import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    number: 0,
};

const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        calculate: (state, {payload} ) =>{
            console.log(payload);
        }
    },
});

export const { calculate } = calculatorSlice.actions;

export default calculatorSlice.reducer;