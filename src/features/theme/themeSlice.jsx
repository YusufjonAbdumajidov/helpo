import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    randomColor: "#7689DE",
};

const colorSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeColor: (state, action) => {
            let themeColor = Math.floor(Math.random()*16777215).toString(16);
            state.randomColor = ("#" + themeColor);
        },
    }
})

export const { changeColor } = colorSlice.actions;

export default colorSlice.reducer;