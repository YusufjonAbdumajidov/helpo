import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
}

const clockSlice = createSlice({
    name: "clock",
    initialState,
    reducers: {
        openClock: (state, action) => {
            state.isOpen = true;
        },
        closeClock: (state, action) => {
            state.isOpen = false;
        },
    },
});

export const { openClock, closeClock } = clockSlice.actions;

export default clockSlice.reducer;